const ServiceConsulting = () => {
  return (
    <div className="flex flex-col justify-content rounded-lg bg-gray-50 shadow-md p-6">
      <h3 className="mx-auto m-4 text-xl tracking-wider font-bold">
        ITコンサルティング事業
      </h3>
      <svg
        className="w-28 mx-auto m-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
          fill="#3E3A39"
        />
      </svg>
      <div className="mb-6">
        <h4 className="mb-2 font-bold">中小企業IT導入活用サポート</h4>
        <p className="ml-2 mb-1 text-sm">
          GoogleAppsやKintoneなどのITサービスを用いた事業推進/運用改善
        </p>
        <a
          className="ml-2 mb-1 text-sm underline"
          href="https://thwoo.co.jp/news/2020-06-29/index.html"
        >
          →株式会社京瀧さまの例
        </a>
      </div>
    </div>
  );
};

export default ServiceConsulting;
