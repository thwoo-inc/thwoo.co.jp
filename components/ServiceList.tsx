import ServiceCard from './ServiceCard';

const ServiceList = () => {
  const serviceObjects = [
    {
      title: 'IT教育事業',
      items: [
        {
          title: 'IT塾スオウパーティ',
          description: 'スクラッチを用いた小中学生向けプログラミング教室',
          linkText: 'スオウパーティWebサイト',
          linkUrl: 'https://thwoo.party',
        },
        {
          title: 'プログラミング初級講座',
          description: '手を動かして体感する社会人向けハンズオン講座',
          linkText: 'うべスタでの講座',
          linkUrl: '/news/2020-12-05',
        },
      ],
      renderSVG: (
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
            fill="#3E3A39"
          />
        </svg>
      ),
    },
    {
      title: 'ITコンサルティング事業',
      items: [
        {
          title: '中小企業IT導入活用サポート',
          description:
            'GoogleAppsやKintoneなどのITサービスを用いた事業推進/運用改善',
          linkText: '株式会社京瀧さまの例',
          linkUrl: '/news/2020-06-29',
        },
      ],
      renderSVG: (
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
            fill="#3E3A39"
          />
        </svg>
      ),
    },
    {
      title: 'Web開発運用事業',
      items: [
        {
          title: 'LINE@構築運用',
          description: '顧客管理や業務フローの自動化/最適化',
        },
        {
          title: '観光プラットフォーム構想',
          linkText: '次世代観光業の草案',
          linkUrl: '/docs/観光プラットフォーム構想_20190806.pdf',
        },
      ],
      renderSVG: (
        <svg
          className=""
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
      ),
    },
  ];

  return (
    <div className="px-4 grid grid-row lg:grid-cols-3 gap-8 mb-12">
      {serviceObjects.map((obj) => (
        <ServiceCard
          key={obj.title}
          title={obj.title}
          items={obj.items.map((item) => ({
            title: item.title,
            description: item.description,
            linkText: `> ${item.linkText}`,
            linkUrl: item.linkUrl,
          }))}
        >
          {obj.renderSVG}
        </ServiceCard>
      ))}
    </div>
  );
};

export default ServiceList;
