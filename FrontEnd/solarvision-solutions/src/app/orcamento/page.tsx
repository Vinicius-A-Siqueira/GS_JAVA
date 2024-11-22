'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const BudgetPage: React.FC = () => {
    const [energyConsumption, setEnergyConsumption] = useState<number>(0);
    const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
    const [numberOfPanels, setNumberOfPanels] = useState<number | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        const user = localStorage.getItem('userEmail');
        if (user) {
            setUserEmail(user);
        }
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const result = await axios.get('/api/orders');
            setOrders(result.data);
        } catch (error) {
            console.error('Erro ao buscar pedidos:', error);
        }
    };

    const calculateBudget = () => {
        const panelCost = 1650;
        const energyPerPanel = 40;

        const panelsRequired = Math.ceil(energyConsumption / energyPerPanel);
        setNumberOfPanels(panelsRequired);

        const costOfPanels = panelsRequired * panelCost;
        const totalCost = costOfPanels * 1.20;

        setEstimatedCost(totalCost);
    };

    const handleCreateOrder = async () => {
        if (!userEmail) {
            alert('Você precisa estar logado para fazer um pedido.');
            return;
        }

        try {
            const response = await axios.post('/api/orders', {
                userEmail,
                energyConsumption,
                quantity: numberOfPanels,
                solarPanelId: 1
            });
            alert('Pedido criado com sucesso!');
            fetchOrders();
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
        }
    };

    const handleDeleteOrder = async (orderId: number) => {
        try {
            await axios.delete(`/api/orders/${orderId}`);
            alert('Pedido excluído com sucesso!');
            fetchOrders();
        } catch (error) {
            console.error('Erro ao excluir pedido:', error);
        }
    };

    const handleExportData = async () => {
        try {
            const result = await axios.get('/api/orders/export');
            const jsonData = JSON.stringify(result.data, null, 2);
            const blob = new Blob([jsonData], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'orders.json';
            link.click();
        } catch (error) {
            console.error('Erro ao exportar dados:', error);
        }
    };

    return (
        <div>
            <main className={styles.budgetContent}>
                <h1>Solicite seu Orçamento de Energia Solar</h1>
                <p>Preencha o formulário abaixo para obter uma estimativa do custo do sistema solar para sua residência ou empresa.</p>

                <section className={styles.budgetFormSection}>
                    <h2>Qual é o seu consumo de energia mensal?</h2>
                    <form onSubmit={(e) => { e.preventDefault(); calculateBudget(); }} className={styles.budgetForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="energyConsumption">Consumo mensal de energia (kWh):</label>
                            <input
                                type="number"
                                id="energyConsumption"
                                value={energyConsumption}
                                onChange={(e) => setEnergyConsumption(Number(e.target.value))}
                                required
                                placeholder="Digite o valor em kWh"
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>Calcular Orçamento</button>
                    </form>

                    {estimatedCost !== null && (
                        <div className={styles.resultSection}>
                            <h3>Estimativa de Orçamento</h3>
                            <p>Com base no seu consumo de {energyConsumption} kWh/mês, você precisará de {numberOfPanels} placas solares.</p>
                            <p>O custo total para a instalação do sistema solar será:</p>
                            <p className={styles.costValue}>R$ {estimatedCost.toFixed(2)}</p>

                            {/* Botão para fazer pedido */}
                            <button onClick={handleCreateOrder} className={styles.placeOrderButton}>
                                Fazer Pedido
                            </button>
                        </div>
                    )}
                </section>

                <section className={styles.ordersSection}>
                    <h2>Pedidos Realizados</h2>
                    <ul>
                        {orders.map(order => (
                            <li key={order.id}>
                                <span>{order.status} - Quantidade: {order.quantity}</span>
                                <button onClick={() => handleDeleteOrder(order.id)}>Excluir</button>
                            </li>
                        ))}
                    </ul>

                    <button onClick={handleExportData} className={styles.exportButton}>
                        Exportar Pedidos para JSON
                    </button>
                </section>
            </main>
        </div>
    );
};

export default BudgetPage;
