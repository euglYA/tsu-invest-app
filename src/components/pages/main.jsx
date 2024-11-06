import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();

    return (
            <div className="container mx-auto p-6 md:p-12 w-full">
                <header className="text-center my-6 md:my-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight leading-tight">
                        Платформа для прогнозирования капитализации
                    </h1>
                    <p className="text-md md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Получите доступ к мощному инструменту для анализа и прогнозирования роста капитализации инвестиционных фондов, чтобы улучшить управление и планирование финансовых стратегий.
                    </p>
                </header>

                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <Feature 
                        title="Данные и аналитика" 
                        description="Поддержка продвинутого анализа и предсказательной модели на основе данных для точного прогнозирования."
                        icon="📊"
                    />
                    <Feature 
                        title="Гибкая настройка" 
                        description="Вводите данные, которые Вам нужны, чтобы оптимизировать прогнозы в соответствии с вашими целями."
                        icon="⚙️"
                    />
                    <Feature 
                        title="Оптимизация стратегии" 
                        description="Оцените, как изменения на рынке влияют на капитализацию, и адаптируйте свои стратегии в режиме реального времени."
                        icon="🚀"
                    />
                </section>

                <div className="text-center mt-16">
                    <button className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
                        onClick={() => {navigate('/analyze')}}
                    >
                        Начать анализ
                    </button>
                </div>
            </div>
    );
}

function Feature({ title, description, icon }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4 text-blue-600">{icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}