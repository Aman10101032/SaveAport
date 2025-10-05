// src/pages/Solution.jsx
export default function Solution() {
  return (
    <div className="container mx-auto py-14 px-6 max-w-4xl">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-8 text-center">
        Наше решение
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Проведённый анализ показал, что исчезновение <span className="font-semibold text-gray-900">апорта</span> не является следствием одного глобального процесса, а представляет собой результат совокупного воздействия нескольких факторов.
        </p>

        <p>
          Главную роль сыграл{" "}
          <span className="font-semibold text-red-600">
            антропогенный фактор
          </span>
          , в частности{" "}
          <span className="font-semibold text-orange-600">
            ухудшение систем орошения
          </span>{" "}
          и снижение уровня влажности почвы. Эти изменения привели к деградации условий произрастания дерева.
        </p>

        <p>
          Наряду с этим{" "}
          <span className="font-semibold text-orange-500">глобальное потепление</span>{" "}
          оказало дополнительное влияние, усиливая климатические стрессы. Однако его воздействие{" "}
          <span className="italic text-gray-800">не является решающим</span>.
        </p>

        <p>
          Таким образом, основная причина утраты апорта кроется в{" "}
          <span className="font-semibold text-red-700">
            неустойчивом управлении водными и земельными ресурсами
          </span>
          , а не только в изменении климата.
        </p>

        <p>
          Эти выводы подчеркивают необходимость{" "}
          <span className="font-semibold text-orange-600">
            восстановления системы орошения
          </span>{" "}
          и{" "}
          <span className="font-semibold text-orange-600">
            рационального водопользования
          </span>{" "}
          как ключевого направления сохранения уникального сорта.
        </p>

        <p>
          Исследование подтверждает, что устойчивость природных и культурных видов зависит прежде всего от{" "}
          <span className="font-semibold text-red-600">
            человеческой ответственности
          </span>{" "}
          и{" "}
          <span className="font-semibold text-red-600">
            бережного отношения к экосистеме
          </span>
          .
        </p>
      </div>
    </div>
  );
}
