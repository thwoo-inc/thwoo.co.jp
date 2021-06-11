const ServiceEducation = () => {
  return (
    <div className="flex flex-col justify-content rounded-lg bg-gray-50 shadow-md p-6">
      <h3 className="mx-auto m-4 text-xl tracking-wider font-bold">
        IT教育事業
      </h3>
      <svg
        className="w-28 mx-auto m-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
          fill="#3E3A39"
        />
      </svg>
      <div className="flex-shrink">
        <div className="mb-6">
          <h4 className="mb-2 font-bold">IT塾スオウパーティ</h4>
          <p className="text-sm ml-2 mb-1">小中学生向けプログラミング教室</p>
          <a
            className="text-sm ml-2 text-right underline"
            href="https://thwoo.party"
          >
            →スオウパーティWebサイト
          </a>
        </div>
        <div className="mb-6">
          <h4 className="mb-2 font-bold">社会人向けプログラミング初級講座</h4>
          <p className="ml-2 mb-1 text-sm">
            手を動かして体感するハンズオン形式
          </p>
          <a
            className="ml-2 mb-1 text-sm text-right underline"
            href="https://thwoo.co.jp/news/2020-12-05/index.html"
          >
            →うべスタでの講座
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceEducation;
