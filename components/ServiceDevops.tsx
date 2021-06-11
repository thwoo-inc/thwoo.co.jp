const ServiceDevops = () => {
  return (
    <div className="flex flex-col justify-content rounded-lg bg-gray-50 shadow-md p-6">
      <h3 className="mx-auto m-4 text-xl tracking-wider font-bold">
        Web開発運用事業
      </h3>
      <svg
        className="w-28 mx-auto m-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <rect
          height="8.48"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8717 17.6255)"
          width="3"
          x="16.34"
          y="12.87"
          fill="#3E3A39"
        />
        <path
          d="M17.5,10c1.93,0,3.5-1.57,3.5-3.5c0-0.58-0.16-1.12-0.41-1.6l-2.7,2.7L16.4,6.11l2.7-2.7C18.62,3.16,18.08,3,17.5,3 C15.57,3,14,4.57,14,6.5c0,0.41,0.08,0.8,0.21,1.16l-1.85,1.85l-1.78-1.78l0.71-0.71L9.88,5.61L12,3.49 c-1.17-1.17-3.07-1.17-4.24,0L4.22,7.03l1.41,1.41H2.81L2.1,9.15l3.54,3.54l0.71-0.71V9.15l1.41,1.41l0.71-0.71l1.78,1.78 l-7.41,7.41l2.12,2.12L16.34,9.79C16.7,9.92,17.09,10,17.5,10z"
          fill="#3E3A39"
        />
      </svg>
      <div className="mb-6">
        <h4 className="mb-2 font-bold">LINE@構築運用</h4>
        <p className="ml-2 mb-1 text-sm">顧客管理や業務フローの自動化/最適化</p>
      </div>
      <div className="mb-6">
        <h4 className="mb-2 font-bold">観光プラットフォーム構想</h4>
        <a className="ml-2 mb-1 text-sm underline">
          →ITを駆使した次世代観光業の草案資料
        </a>
      </div>
    </div>
  );
};

export default ServiceDevops;
