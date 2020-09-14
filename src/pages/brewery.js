import React from "react";
import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout";
import Footer from "../components/footer";
import "../styles/brewery.scss";

const Brewery = () => {
    const data = useStaticQuery(graphql`
    {
        taikenLabel: file(relativePath: {eq: "taw_taiken_label.pdf"}) {
            publicURL
            name
        }
    }
  `)
    return (
        <Layout>
            <div className="brewery">
                <div className="brewery-main">
                    <Link to="/brewery#school" className="brewery-main-schoollink" role="button">Brewing School</Link>
                    <h1 className="brewery-main-title">OUR BREWERY</h1>
                    <div className="brewery-main-body">
                        <div className="brewery-main-body-description">
                            <h2 className="brewery-main-body-description-heading">Craft Revolution, Not Just Evolution</h2>
                            <h3 className="brewery-main-body-description-heading">「クラフトの進化だけではなく、革命を 」</h3>
                            <hr/>
                            <p>クラフトビールの進化は、新しいものを追い求めることに囚われず</p>
                            <p>つねに基本に立ち返ることから始まる。</p>
                            <p><strong>"Back to the Basics"</strong></p>
                            <p>原点を見失わず クラフトビールを創造し続けていく中に</p>
                            <p>新しい発見と可能性は開かれていく</p>
                            <p>そうした挑戦をサポートすることで</p>
                            <p>真のクラフトマンシップの変革を起こし</p>
                            <p>人と人をつなぐブリューイングの架け橋になる</p>
                            <p>それがTOKYO ALEWORKSが目指す「コミューナルブリューイング」です。</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="brewery-main-body-description">
                            <h3 className="brewery-main-body-description-heading">東京の板橋から、ブリューイングで世界の懸け橋に</h3>
                            <h2 className="brewery-main-body-description-heading">From Itabashi To The World</h2>
                            <hr/>
                            <p>かつて江戸の四宿の一つであった板橋。</p>
                            <p>私達「TOKYO ALEWORKS」は、そんな東京の玄関口ともいえる街で、</p>
                            <p>真のクラフト・ビールの醍醐味を伝え</p>
                            <p>板橋から世界へつなげるブリューイングの懸け橋となる</p>
                            <p>コミュニティーを築いていきます。</p>
                        </div> 
                        <br/>
                        <br/>
                        <div id="school" className="brewery-main-body-school">
                            <h1 className="brewery-main-body-school-heading" >SCHOOL</h1> 
                            <hr/>
                            <p>TOKYO ALEWORKSでは、クラフトビールの醸造を体験できます！</p>
                            <p>先ずは、造りたいビールスタイルの日時のコースをお申込みください。当日は、TOKYO ALEWORKSのテクニカルスタッフが、あなたと一緒に美味しいクラフトビール造りをサポート致します。</p>
                            <h2 className="brewery-main-body-school-heading">- 醸造体験中の服装 -</h2>
                            <p>動きやすく、汚れても構わない服装でいらしてください。
                            温度変化に対応できるよう、脱ぎ着できる格好がおすすめです。
                            お靴はスニーカーなどでいらしてください。危険ですのでヒールやサンダルは不可。</p>
                            <p style={{color: "red"}}>※靴の貸出しは有料となります。一足￥350</p>
                            <h2 className="brewery-main-body-school-heading">- 醸造体験メニュー -</h2>
                            <li>IPA 20リットル仕込み</li>
                            <li>ペールエール 20リットル仕込み</li>
                            <li>スタウト 20リットル仕込み</li>
                            <li>ブロンドエール　20リットル仕込み</li>
                            <li>ホワイトエール　20リットル仕込み</li>
                            <p style={{color: "red"}}>※上記よりお選びいただけます</p>
                            <p>ご予約の際にご選択ください</p>
                            <h2 className="brewery-main-body-school-heading">- お申込み料金 -</h2>
                            <p><strong>【2020年体験醸造価格】</strong></p>
                            <p>330mlボトル／約48本</p>
                            <p>金額 49,800円（税込）</p>
                            <p style={{color: "red"}}>※発送をご希望の場合、別途送料が掛かります。</p>
                            <p style={{color: "red"}}>※決済はクレジットカードのみとなりますので予めご了承ください。</p>
                            <p>★併設のタップルームにて使えるサービス券5枚付き！！</p>
                            <p>※サービス券内容・・・ランチ無料orビール一杯無料（ハーフサイズでのご提供となります）</p>
                            <h2 className="brewery-main-body-school-heading">- お申込み方法 -</h2>
                            <p>ネット予約のみとなっております。</p>
                            <p>予約受付外の期間は「受付停止」と表示されます。</p>
                            <p>受付情報につきましては、NEWS、SNSも併せてご覧ください。</p>
                            <a href="https://airrsv.net/tokyoaleworks/calendar" target="_blank" rel="noopener noreferrer"><button type="button" style={{margin: "50px"}}>ご予約はこちら</button></a>
                            <h2 className="brewery-main-body-school-heading">- 醸造体験参加人数 -</h2>
                            <p>１仕込み５名様までとさせていただきます。
                                作業的に、１～３名様がおすすめです。</p>
                            <h2 className="brewery-main-body-school-heading">- 醸造体験スケジュール -</h2>
                            <p>10:30　醸造体験・ビール醸造の説明</p>
                            <p>11:00　醸造作業の開始（麦芽を計って粉砕工程～マッシング）</p>
                            <p>12:00　糖化工程中お昼休憩</p>
                            <p>13:00　醸造作業の再開（マッシュタン洗浄、煮込み工程、ホップ投入、冷却、酵母投入立会い）</p>
                            <p>15:00　煮沸釜洗浄、ホース類洗浄、後片付け</p>
                            <p>16:00　醸造体験の終了</p>
                            <p style={{color: "red"}}>※終了時間は、作業進捗により前後します。スケジュールに余裕を持ってお越しください</p>
                            <h2 className="brewery-main-body-school-heading">- ラベルについて -</h2>
                            <p>醸造体験時にラベルをお選びいただけます。
                            下記「ラベルサンプル一覧」にてデザインをご確認ください。
                            </p>
                            <a href={data.taikenLabel.publicURL} target="_blank" rel="noopener noreferrer"><button type="button" style={{margin: "50px"}} download>ラベルサンプル一覧</button></a>
                            <p style={{color: "red"}}>※オリジナルデータでの入稿も可能ですのでおたずね下さい</p>
                            <h2 className="brewery-main-body-school-heading">- 醸造体験ビール納期 -</h2>
                            <p>醸造仕込み日から約5週間後に配送</p>
                            <p style={{color: "red"}}>※発送をご希望の場合、別途送料が掛かります</p>
                            <h2 className="brewery-main-body-school-heading">- 注意事項 -</h2>
                            <p>醸造体験中は基本的に我々のスタッフが作業手順を教えながら、お客様がすべての工程を行っていただけます。</p>
                            <p>危険の伴う工程もあり、また衛生管理のためにも必ずスタッフの指示にお従いください。</p>
                            <p>オリジナルビール造りを楽しみましょう！</p>
                        </div>
                        
                    </div>
                    
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export default Brewery;