let seed = Date.now()

const InvestAPI = {
    lcg() {
        // Константы LCG
        const a = 1664525;    // Множитель
        const c = 1013904223; // Приращение
        const m = 2 ** 32;    // Модуль (2^32)
    
        seed = (a * seed + c) % m; // Обновление значения seed
        return seed / m;           // Нормализация числа к диапазону [0, 1)
    },


    calculateDensity(data, numBins = 100) {
        const min = Math.min(...data);
        const max = Math.max(...data);
        const step = (max - min) / numBins;
        const bins = Array.from({ length: numBins }, (_, i) => min + i * step);
        const density = bins.map(bin => ({
            x: bin,
            y: data.filter(d => d >= bin && d < bin + step).length / data.length,
        }));
        return density;
    },

    analyzeInvestorCapital(capital, investors) {
        const filteredCapital = capital.filter(c => c > 0);
        const minCapital = Math.min(...filteredCapital);
        const alpha = 1 + filteredCapital.length / filteredCapital.reduce((acc, c) => acc + Math.log(c / minCapital), 0);
        // console.log("analyzeInvestorCapital: Оценка показателя степени α:", alpha);
        const sortedCapital = filteredCapital.sort((a, b) => b - a);
        const numInvestors = sortedCapital.length;
        const top20PercentCount = Math.ceil(numInvestors * 0.2);
        const keyPlayers = sortedCapital.slice(0, top20PercentCount);
        console.log("analyzeInvestorCapital: Ключевые игроки (20% с наибольшими капиталами):", keyPlayers);

        const predictedCapital = Array.from({ length: investors }, () => {
            let value = (1 - Math.random()) ** (- 1 / (alpha - 1))
            return minCapital * value;
        });

        console.log("analyzeInvestorCapital: Прогноз капитала:", predictedCapital);
        const density = this.calculateDensity(predictedCapital, investors);

        // console.log("analyzeInvestorCapital: density:", density);
        return {density, keyPlayers};
    },

    randomForChart(count) {
        let arr = [];

        for (let i = 0; i < count; i++) {
            arr.push({x: i, y: Math.random()});
        }

        return arr;
    }
}

export default InvestAPI;