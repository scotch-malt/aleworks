import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/growlerlayout"
import "../../styles/ukeg-troubleshooting.scss"

const UkegTroubleshooting = () => {
    return (
        <Layout>
            <div className="troubleshooting">
                <div className="troubleshooting-guide">
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
                </div>
                <div className="troubleshooting-main">
                    <h1 className="troubleshooting-main-title">よくあるご質問</h1>
                    <br/>
                    <div className="troubleshooting-main-purchase">
                        <h2 className="troubleshooting-main-purchase-title">UKEGの購入方法について</h2>
                        <h3>Q. UKEGはどこで買えますか？</h3>
                        <ul>
                            <li>現在、オンライン販売と店頭販売を展開しています</li>
                            <ul>
                                <li>オンライン販売　：　Saketryから</li>
                                <li>加盟店での店頭販売　：　加盟店情報</li>
                            </ul>
                            <p>※店頭販売は全店舗ではないため、直接お問い合わせください</p>
                        </ul>
                        <h3>Q. 現物を触って確認することができますか？</h3>
                        <ul>
                            <li>TOKYO ALEWORKS隣接のタップルームにて、実物を展示・販売しています。</li>
                        </ul>
                        <h3>Q. レンタルはありますか？</h3>
                        <ul>
                            <li>現在、準備中です。しばらくお待ちください。</li>
                        </ul>
                        <br/>
                        <h2 className="troubleshooting-main-purchase-title">TOKYO ALEWORKSのビールについて</h2>
                        <h3>中のビールはどこで買えますか？</h3>
                        <ul>
                            <li>TOKYO ALEWORKSオリジナルビールは、隣接のタップルームにて購入することができます。</li>
                            <li>その他の店舗さまについては、加盟店情報　からご確認いただけます。</li>
                        </ul>
                        <h3>中身を入れて送ってもらえるのですか？</h3>
                        <ul>
                            <li>残念ながら、保冷箱等のご準備がない・品質管理ができないという理由から対応しておりません。
対応店舗にご持参くださいますよう、お願いいたします。</li>
                        </ul>
                        <br/>
                        <h2 className="troubleshooting-main-purchase-title">仕様について</h2>
                        <h3>Q. 内容量を教えてください。</h3>
                        <ul>
                            <li>64oz（約1.9L）、128oz（約3.8L）の2種類をご用意しています。</li>
                        </ul>
                        <h3>Q. ガスカートリッジなしでも使用できますか？</h3>
                        <ul>
                            <li>コックから注ぐのにガス圧を利用しているため、カートリッジを接続しないと液体を抽出することができません。</li>
                            <li>水筒のように使って液体を運ぶことは可能ですが、毎回蓋を開けてサーブしますと、ビールの鮮度はすぐ落ちてしまいます。</li>
                        </ul>
                        <h3>色の違いはなんですか？</h3>
                        <ul>
                            <li>各色とも素材は共通です。ステンレスのヘアライン仕上げか、塗装仕上げかの違いになります。</li>
                        </ul>
                        <br/>
                        <h2 className="troubleshooting-main-purchase-title">使用可能な液体について</h2>
                        <h3>Q. どんなお酒を入れてよいですか？</h3>
                        <ul>
                            <li>特にNGな酒類はありません。
発泡性の日本酒、ワインなども是非お試しください。</li>
                            <li>長時間入れておきますと、炭酸ガスの溶けこみにより風味がわずかに変わって感じられることがあります。
害はありませんが、味わいの違いが気になる方はお避けください。</li>
                        </ul>
                        <h3>Q. 入れてはいけないドリンクはありますか？</h3>
                        <ul>
                            <li>粘度や糖度が非常に高い液体（タピオカドリンクなど）や、固形物の多い液体（パルプの多い果汁など）を入れますと、グースネックに詰まったり、固まって通らなくなる場合がありますのでおやめください。</li>
                        </ul>
                        <h3>Q. 市販の缶ビールを入れてもよいですか？</h3>
                        <ul>
                            <li>問題ありません。
缶の捨て場所を気にせずにアウトドアでビールを楽しめるなど、非常に使い勝手が良いです。</li>
                            <li>移し変える際どうしても外気に触れるため、缶のままよりも消費期限が短くなります。</li>
                        </ul>
                        <br/>
                        <h2 className="troubleshooting-main-purchase-title">内容物の賞味期限について</h2>
                        <h3>Q. 液体を入れてからどのくらい持ちますか？</h3>
                        <ul>
                            <li>ビール・シャンパンなど炭酸を含むアルコールの場合、4～5日程度は新鮮な状態で楽しめます。</li>
                            <li>ソフトドリンク等は当日の消費をおすすめします。</li>
                        </ul>
                        <br/>
                        <h2 className="troubleshooting-main-purchase-title">ミニガスカートリッジについて</h2>
                        <h3>Q. ミニガスカートリッジはどこで買えますか？</h3>
                        <ul>
                            <li>現在、オンライン販売と店頭販売を展開しています。</li>
                            <ul>
                                <li>オンライン販売　：　Saketryから</li>
                                <li>TOKYO ALEWORKS TAPROOM：こちらから</li>
                                <li>加盟店での店頭販売　：　加盟店情報</li>
                            </ul>
                            <p>※店頭販売は全店舗ではないため、直接お問い合わせください</p>
                        </ul>
                        <h3>Q. ミニガスカートリッジの取替えはいつのタイミングで行えばいいですか？</h3>
                        <ul>
                            <li>1回のフィルごとに交換していただくのが基本です。</li>
                            <li>2回分は使用できないので（2回目の途中でなくなってしまいます）、液体を全部注ぎ終わってから、残りのガスを清掃に使っていただくと無駄にならず、合理的です。</li>
                        </ul>
                        <h3>Q. ガスカートリッジのサイズはUKEGによって決まっていますか？</h3>
                        <ul>
                            <li>それぞれ専用サイズのガスカートリッジがあります。</li>
                            <ul>
                                <li>128 oz　⇒　16gカートリッジ
                                </li>
                                <li>64 oz　⇒　8gカートリッジ</li>
                            </ul>
                        </ul>
                        <h3>Q. 使用済カートリッジはどうしたらよいですか？</h3>
                        <ul>
                            <li>使用済みのミニガスカートリッジは、口の部分に穴が空いていることを確認してから、各自治体の指示に従って処分してください。（材質：スチール）</li>
                        </ul>
                        <br/>
                        <h2 className="troubleshooting-main-purchase-title">UKEGのお手入れについて</h2>
                        <h3>Q. 洗浄方法は？</h3>
                        <ul>
                            <li>こちらのサイトに詳しい記載がありますので、ご覧ください。　⇒　メンテナンス</li>
                        </ul>
                        <h3>Q. 専用の洗剤はありますか？</h3>
                        <ul>
                            <li>現在、特に専用洗剤の販売はいたしておりません。</li>
                            <li>こちらのサイトも合わせてご覧ください。 　⇒　メンテナンス</li>
                        </ul>
                        <br/>
                        <h2 className="troubleshooting-main-purchase-title">各種トラブルなど</h2>
                        <h3>Q. ミニガスカートリッジを取り付けると、すぐにガスが漏れる場合はどうしたらいいですか？</h3>
                        <ul>
                            <li>取り付け時は、圧力ダイヤルをオフにしてください。
圧力ダイヤルは、反時計方向までいっぱいに回すとオフになります。
他、以下を参照してください。</li>
                            <li>カートリッジリテーナーが正しい位置にはめ込まれているか確認してください。</li>
                            <li>カートリッジシールが破損していませんか？　その場合は交換してください。</li>
                        </ul>
                        <h3>Q. タップを開けてもビールが出ないのはなぜですか？</h3>
                        <ul>
                            <li>正しく圧力がかかっていない可能性があります。以下を確認してください。</li>
                            <ul>
                                <li>新しい炭酸ガスカートリッジが取り付けられていますか？</li>
                                <li>VPRキャップの圧力はオンになっていますか？ どちらも正常な場合は、VPRキャップが故障している可能性があります。⇒「VPRキャップの状態を確かめるにはどうしたらいいですか？」を参照してください。</li>
                                <li>圧力計に圧力が表示されていますか？ 表示されていない場合は「Q. 圧力をかけても圧力計が0psiを指したまま変わりません。」を参照してください。</li>
                            </ul>
                            <li>タップが詰まっている可能性があります。
「清掃のしかた」を参照して、きれいに洗ってください。</li>
                            <li>きれいに洗ってもビールが出ない場合は、タップの内側を分解して清掃する必要があるかもしれません。お問い合わせフォームからご連絡ください。</li>
                        </ul>
                        <p>注意：0.8mmを超える固形物（果物など）を含む液体は使用しないでください。</p>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default UkegTroubleshooting