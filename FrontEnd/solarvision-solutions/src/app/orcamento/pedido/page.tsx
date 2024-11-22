'use client'; // Marca a página como Client-Side

import { useRouter, useSearchParams } from 'next/navigation'; // Para obter os parâmetros de query
import React, { useEffect, useState } from 'react';

const OrderPage: React.FC = () => {
    const [orderDetails, setOrderDetails] = useState<any>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null); // Email do usuário
    const router = useRouter();
    const queryParams = useSearchParams();

    useEffect(() => {
        // Verifica se o usuário está logado
        const user = localStorage.getItem('userEmail'); // Pode ser substituído por uma solução de autenticação
        if (user) {
            setUserEmail(user);
        }

        // Obtém as informações do orçamento passadas pela página de orçamento
        const energyConsumption = queryParams.get('energyConsumption');
        const estimatedCost = queryParams.get('estimatedCost');
        const numberOfPanels = queryParams.get('numberOfPanels');

        if (energyConsumption && estimatedCost && numberOfPanels) {
            setOrderDetails({
                energyConsumption,
                estimatedCost,
                numberOfPanels,
            });
        }
    }, [queryParams]);

    const handleSubmitOrder = () => {
        if (!userEmail) {
            alert('Você precisa estar logado para finalizar o pedido.');
            return;
        }

        // Lógica para salvar o pedido ou enviar para o backend
        alert('Pedido realizado com sucesso!');
        router.push('/'); // Redireciona para a página inicial ou confirmação
    };

    if (!orderDetails) {
        return <p>Carregando informações do pedido...</p>;
    }

    return (
        <div>
            <main>
                <h1>Confirmação do Pedido</h1>
                <p>Confira os detalhes do seu orçamento antes de finalizar o pedido.</p>

                <section>
                    <p>Consumo de energia: {orderDetails.energyConsumption} kWh/mês</p>
                    <p>Número de placas solares necessárias: {orderDetails.numberOfPanels}</p>
                    <p>Custo total estimado: R$ {parseFloat(orderDetails.estimatedCost).toFixed(2)}</p>
                </section>

                <button onClick={handleSubmitOrder}>Finalizar Pedido</button>
            </main>
        </div>
    );
};

export default OrderPage;
