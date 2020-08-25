import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/growlerlayout"
import howto1 from "../../images/growler/howto/howto1.jpg"
import howto2 from "../../images/growler/howto/howto2.jpg"
import howto3 from "../../images/growler/howto/howto3.jpg"
import howto4 from "../../images/growler/howto/howto4.jpg"
import howto5 from "../../images/growler/howto/howto5.jpg"
import howto6 from "../../images/growler/howto/howto6.jpg"
import howto7 from "../../images/growler/howto/howto7.jpg"
import howto8 from "../../images/growler/howto/howto8.jpg"
import howto9 from "../../images/growler/howto/howto9.jpg"
import howto10 from "../../images/growler/howto/howto10.jpg"
import howto11 from "../../images/growler/howto/howto11.jpg"
import howto12 from "../../images/growler/howto/howto12.jpg"
import howto13 from "../../images/growler/howto/howto13.jpg"
import "..//../styles/ukeg-howto.scss"

const UkegHowto = () => {
    return (
        <Layout>
            <div className="howto">
                <div className="howto-main">
                    <div className="howto-main-guide">
                        <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                        <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                        <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                        <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                        <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                        <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
                    </div>
                    <h1 className="howto-main-title">UKEGの使い方</h1>
                    <div className="howto-main-basic">
                        <div className="howto-main-basic-first5">
                            <h3 className="howto-main-basic-first5-instruction">&#9312; 炭酸ガスカートリッジをカートリッジスリーブにセットします。</h3>
                            <div className="howto-main-basic-first5-image">
                                <img src={howto1} alt=""/>
                            </div>
                        </div>
                        <div className="howto-main-basic-first5">
                            <h3 className="howto-main-basic-first5-instruction">&#9313; カートリッジスリーブをVPRキャップに取り付けます。</h3>
                            <div className="howto-main-basic-first5-image">
                                <img src={howto2} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>取り付ける前にVPRキャップの圧力ダイヤルがオフになっていることを確認してください。</li>
                                <li>スリーブを締めていくと途中で軽い手応えを感じますので、そこで一旦動作を止めてください。</li>
                                <li>一気にスリーブを増し締めしてください。プシュッという音とともに炭酸ガスが漏れる音がスリーブ内から聞こえます。</li>
                                <li>カートリッジスリーブを締めすぎると、スリーブが破損します。VPRキャップとの間にすき間があるのが正常です。</li>
                            </ul>
                        </div>
                        <div className="howto-main-basic-first5">
                            <h3 className="howto-main-basic-first5-instruction">&#9314; 飲み物をボトルに注ぎます。</h3>
                            <div className="howto-main-basic-first5-image">
                                <img src={howto3} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>冷たい水でボトルをすすいでおきます。</li>
                                <li>充填チューブを使って、底の方から注いでください。</li>
                            </ul>
                        </div>
                        <div className="howto-main-basic-first5">
                            <h3 className="howto-main-basic-first5-instruction">&#9315; VPRキャップをボトルに取り付けて、お好みの設定まで圧力を上げます。</h3>
                            <div className="howto-main-basic-first5-image">
                                <img src={howto4} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>圧力を上げたら、しばらくそのままにしてください。</li>
                                <li>ボトル内の圧力は、圧力計で確認できます。</li>
                            </ul>
                        </div>
                        <div className="howto-main-basic-first5">
                            <h3 className="howto-main-basic-first5-instruction">&#9316; 飲み物をグラスに注ぎます。</h3>
                            <div className="howto-main-basic-first5-image">
                                <img src={howto5} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>グラスは傾けてタップの近くに持ってください。</li>
                                <li>タップを完全に開いて注ぎます。</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className="howto-main-title">圧力設定の目安（気温：4℃、海抜：0mの場合）</h1>
                    <div className="howto-main-temp">
                        <ul style={{textAlign: 'start'}}>
                            <li>スタウト／ポーター／クリームエール／大麦ワイン：3-6 psi</li>
                            <li>オレンジエール／ブラウンエール／レッドエール：5-8 psi</li>
                            <li>IPA／ペールエール／小麦、他のエール：7-10 psi</li>
                            <li>ラガー／ピルスナー／サイダー／コンブチャ：9-12 psi</li>
                            <li>スパークリングワイン／ソーダ：12-15 psi</li>
                        </ul>
                    </div>
                    <h1 className="howto-main-title">VPRキャップの使い方</h1>
                    <div className="howto-main-basic">
                        <div className="howto-main-basic-vpr">
                            <h3 className="howto-main-basic-vpr-instruction">カートリッジスリーブはVPRキャップにぴったりつける必要はありません。</h3>
                            <div className="howto-main-basic-vpr-image">
                                <img src={howto6} alt=""/>
                            </div>
                        </div>
                        <div className="howto-main-basic-vpr">
                            <h3 className="howto-main-basic-vpr-instruction">スリーブシールが図のように取り付けられていること、破損していないことを確認してください。</h3>
                            <div className="howto-main-basic-vpr-image">
                                <img src={howto7} alt=""/>
                            </div>
                        </div>
                        <div className="howto-main-basic-vpr">
                            <h3 className="howto-main-basic-vpr-instruction">圧力を解除するときは、圧力ダイヤルを反時計回りに回してください。</h3>
                            <div className="howto-main-basic-vpr-image">
                                <img src={howto8} alt=""/>
                            </div>
                        </div>
                    </div>
                    <h2 className="howto-main-title">炭酸ガスカートリッジの取り付け</h2>
                    <div className="howto-main-basic-first5">
                        <ul style={{textAlign: 'start'}}>
                            <li>炭酸ガスカートリッジを取り付ける前に、以下を確認してください。
                                <ul>
                                    <li>圧力ダイヤルが完全にオフになっている。</li>
                                    <li>カートリッジシールリテーナーがぴったりと取り付けられ、固定タブが押し出されている。</li>
                                    <li>カートリッジシールが破損していない、過度に磨耗していない。</li>
                                    <li>キャップOリングが伸びていない、破損していない。</li>
                                    <li>スリーブシールとスリーブプラグが正常である。（スリーブシールとスリーブプラグはビールが炭酸ガスカートリッジと接触しないようにします。）</li>
                                </ul>
                            </li>
                            <li>カートリッジスリーブを素早く締めます。</li>
                            <li>吹き出し音が聞こえます。数秒で止まります。</li>
                            <li>炭酸ガスカートリッジがセットされているか確認するには、圧力ダイヤルを少しだけ回してください。炭酸ガスの吹き出す音がわずかに聞こえます。</li>
                            <li>適正な炭酸ガスカートリッジのみを使用してください。 一部の炭酸ガスカートリッジはカートリッジスリーブに適切に収まらず、炭酸ガスが漏れる可能性があります。</li>
                        </ul>
                    </div>
                    <h2 className="howto-main-title">炭酸ガスカートリッジの取り外し</h2>
                    <div className="howto-main-basic-first5">
                        <ul style={{textAlign: 'start'}}>
                            <li>圧力をオフにすれば、VPRキャップはいつでも取り外しできます。</li>
                            <li>スリーブを外す前に、圧力ダイヤルを回して炭酸ガスカートリッジが空であること（吹き出し音が聞こえないこと）を確認してください。</li>
                            <li>カートリッジスリーブをゆっくり緩めてください。吹き出し音が聞こえたら、音が止まるまでそのままお待ちください。</li>
                            <li>次のカートリッジを取り付ける場合は、カートリッジシールが丸みを帯びた形に戻るまでお待ちください。</li>
                        </ul>
                    </div>
                    <h2 className="howto-main-title">VPRキャップについて</h2>
                    <div className="howto-main-cap">
                        <h3 className="howto-main-cap-instruction">日ごろから以下を確認しておいてください。</h3>
                        <div className="howto-main-cap-image">
                            <img src={howto9} alt=""/>
                        </div>
                        <ul style={{textAlign: 'start'}}>
                            <li>炭酸ガスカートリッジはボトル1回分の飲料がなくなるまで使えます。使用後、炭酸ガスカートリッジには炭酸ガスが少し残ります。残った炭酸ガスはクリーニングに使用できます。（「清掃のしかた」参照）</li>
                            <li>ビールは、最低2週間は新鮮に保たれます。</li>
                            <li>カートリッジシールは破損がない限り、20回以上の充填に使用できます。</li>
                            <li>炭酸ガスカートリッジをVPRキャップに長期間取り付けたままにすると、カートリッジシールの寿命が短くなります。空になった炭酸ガスカートリッジは速やかに取り外してください。</li>
                            <li>キャップOリングは破損したり伸びたりする可能性があり、交換が必要な場合があります。</li>
                            <li>カートリッジシールには、食用のシリコングリースを塗布すると長持ちすることがあります。</li>
                        </ul>
                    </div>
                    <h1 className="howto-main-title">禁止事項</h1>
                    <div className="howto-main-basic-first5">
                        <h3 className="howto-main-basic-first5-instruction">&#9658; 炭酸ガスカートリッジの圧力が残っているときは、カートリッジスリーブを開けないでください。</h3>
                        <div className="howto-main-basic-first5-image">
                            <img src={howto10} alt=""/>
                        </div>
                    </div>
                    <div className="howto-main-basic-first5">
                        <h3 className="howto-main-basic-first5-instruction">&#9658; 炭酸ガスカートリッジをセットせずに使用しないでください。</h3>
                        <div className="howto-main-basic-first5-image">
                            <img src={howto11} alt=""/>
                        </div>
                    </div>
                    <div className="howto-main-basic-first5">
                        <h3 className="howto-main-basic-first5-instruction">&#9658; ボトルに飲み物が残っているときは、圧力をオフにしないでください。圧力をオフにしても炭酸ガスは節約されません。</h3>
                        <div className="howto-main-basic-first5-image">
                            <img src={howto12} alt=""/>
                        </div>
                    </div>
                    <div className="howto-main-basic-first5">
                        <h3 className="howto-main-basic-first5-instruction">&#9658; 保管するときや持ち運びするときは、ボトルを倒したり振ったりしないでください。</h3>
                        <div className="howto-main-basic-first5-image">
                            <img src={howto13} alt=""/>
                        </div>
                    </div>
                    <div className="howto-main-basic-first5">
                        <h3 className="howto-main-basic-first5-instruction">&#9658; 49℃以上の液体を使用しないでください。</h3>
                        <h3 className="howto-main-basic-first5-instruction">&#9658; キャリーハンドルやカラーコーティングされたボトル本体を研磨しないでください。</h3>
                        <h3 className="howto-main-basic-first5-instruction">&#9658; 食洗機で洗わないでください。必ず手洗いしてください。</h3>
                    </div>

                </div>
            </div>
            
        </Layout>
    )
}

export default UkegHowto