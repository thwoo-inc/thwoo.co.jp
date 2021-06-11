const About = () => {
  return (
    <div id="about" className="items-center justify-center mb-12">
      <h2 className="w-32 mb-8 p-1 mx-auto text-corporate-font text-center text-xl md:text-2xl tracking-widest border-b-2 border-corporate-primary">
        ABOUT
      </h2>
      <div className="flex flex-col lg:flex-row items-center px-4 mb-12">
        <div className="flex-1 mx-auto p-8">
          <img className="w-24 mx-auto mb-6" src="/about/corporate-logo.png" />
        </div>

        <div className="flex-1 mx-auto px-4 py-8">
          <table className="table-fixed mx-auto">
            <tbody>
              <tr className="block mb-8">
                <th className="w-32 mb-8 text-left tracking-wider">社名</th>
                <td className="">
                  <p>株式会社スオウ</p>
                  <p>(Thwoo, Inc.)</p>
                </td>
              </tr>
              <tr className="block mb-8">
                <th className="w-32 mb-8 text-left tracking-wider">
                  代表取締役
                </th>
                <td className="">
                  <p>原田 哲也</p>
                  <a
                    className="underline"
                    href="https://thwoo.co.jp/news/2019-06-13/index.html"
                  >
                    →代表メッセージ
                  </a>
                </td>
              </tr>
              <tr className="block mb-8">
                <th className="w-32 mb-8 text-left tracking-wider">資本金</th>
                <td className="">100万円</td>
              </tr>
              <tr className="block mb-8">
                <th className="w-32 mb-8 text-left tracking-wider">
                  お問い合わせ
                </th>
                <td className="">
                  <button className="border p-2 rounded">
                    問い合わせフォーム
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
