import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/growlerlayout"
import "../../styles/ukeg-troubleshooting.scss"

const UkegTroubleshooting = () => {
    return (
        <Layout>
            <div className="troubleshooting">
                <div className="troubleshooting-guide">
                    <Link to="/growler/ukeg-howto"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                    <Link to="/growler/ukeg-items"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                    <Link to="/growler/ukeg-maintenance"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                    <Link to="/growler/ukeg-warranty"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                    <Link to="/growler/ukeg-troubleshooting"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                    <Link to="/growler/ukeg-member"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
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
                        <br/>
                        <h3>Q. VPRキャップの状態を確かめるにはどうしたらいいですか？</h3>
                        <ul>
                            <li>VPRキャップをボトルから外し、圧力ダイヤルを少し回して、炭酸ガスの吹き出し音がするか確認してください。</li>
                            <li>炭酸ガスカートリッジに炭酸ガスが残っていても吹き出し音が聞こえない場合は、VPRキャップの交換について「お問い合わせフォーム」からご連絡ください。</li>
                        </ul>
                        <br/>
                        <h3>Q. 1～2日で圧力がかからなくなってしまうのはなぜですか？</h3>
                        <ul>
                            <li>以下を確認してください。</li>
                            <ul>
                                <li>VPRキャップの圧力ダイヤルはオンになっていますか？
一旦圧力をかけた後は、圧力ダイヤルをオフにしないでください。</li>
                                <li>VPRキャップはしっかり締まっていますか？</li>
                                <li>キャップOリングが挟まれていたり、破損したりしていませんか？</li>
                                <li>カートリッジシールが破損していませんか？</li>
                                <li>カートリッジリテーナーは正しい位置にはめ込まれていますか？</li>
                            </ul>
                            <p>⇒すべてが正しい状態でも吹き出し音が聞こえるときは、「お問い合わせフォーム」からご連絡ください。</p>
                        </ul>
                        <br/>
                        <h3>Q. ビールがなくなる前に炭酸ガスが切れてしまいますが、適正でしょうか？</h3>
                        <ul>
                            <li>炭酸ガスがゆっくり漏れている可能性があります。
「Q. 1～2日で圧力がかからなくなってしまうのはなぜですか？」の回答を参照して確認してください。</li>
                            <li>また、もともとのビールに炭酸ガスがあまり含まれていない場合、カートリッジの炭酸ガスは時間をかけてビールに吸収されていきます。
この場合は、通常よりも早く炭酸ガスが無くなります。</li>
                        </ul>
                        <br/>
                        <h3>Q. タップやグースネックが左右に回転してしまいますが、大丈夫でしょうか？</h3>
                        <ul>
                            <li>正常な状態です。
グースネックは持ち運びの際に邪魔にならないよう、横に向けることができます。
また、必要に応じて横から注げるように回転させることができます。
緩すぎて注いでいるあいだに回転してしまう場合は、グースネックのどちらかの端にあるナットを締めてください。</li>
                        </ul>
                        <br/>
                        <h3>Q. タップロックが動かなくなりました。故障でしょうか？</h3>
                        <ul>
                            <li>ビールが乾いて固まっている可能性があります。下記の手順をお試しください。</li>
                            <ul>
                                <li>タップを取り外して、お湯で温めてください。</li>
                                <li>お湯の中で、金属スプーンの背中部分などを使ってタップロックを押しこんでください。</li>
                                <li>滑らかに動くようになるまで、何度か押してください。</li>
                                <li>清掃するときは、タップロックは必ずお湯ですすいでください。</li>
                            </ul>
                        </ul>
                        <br/>
                        <h3>Q. 圧力をかけても圧力計が0psiを指したまま変わりません。</h3>
                        <ul>
                            <li>圧力計の針は一時的に動かなくなることがあります。
圧力をかけた状態で、ゲージ面を軽くたたいてみてください。</li>
                            <li>ビールが乾いて固まっている可能性があります。
growlerwerks.com/howtoのビデオを参照して圧力計を清掃してください。（英語版のみ）</li>
                            <li>上記を試しても針が動かない場合、圧力計が故障している可能性があります。
「お問い合わせフォーム」からお問い合わせください。</li>
                        </ul>
                        <br/>
                        <h3>Q. 圧力をオフにしたら、圧力計が0psiを指したまま動かなくなりました。</h3>
                        <ul>
                            <li>上記「Q.圧力をかけても圧力計が0psiを指したまま変わりません。」を参照してください。</li>
                        </ul>
                        <br/>
                        <h3>Q. 落として/ぶつけてしまい、動かなくなった箇所がありますがどうしたらいいですか？</h3>
                        <ul>
                            <li>落下や衝撃により故障したと思われる場合は「お問い合わせフォーム」からご連絡ください。
破損箇所が目視できる場合は、状況を記載してください。</li>
                        </ul>
                        <br/>
                        <h3>Q. タップを閉じてロックしても、水滴が止まりません。</h3>
                        <ul>
                            <li>タップを閉じた後でも、数滴滴ることはあります。滴り続ける場合は、以下を確認してください。</li>
                            <ul>
                                <li>内部のOリングがゴミで異常を起こしている可能性があります。
「メンテナンス」を参照して、清掃してください。</li>
                                <li>清掃後も滴下が止まらない場合は、内部のOリングが摩耗しているため交換が必要です。
「お問い合わせフォーム」からご連絡ください。</li>
                            </ul>
                        </ul>
                        <br/>
                        <h3>Q. ビールを注ぐと毎回カップの1/4以上泡立ってしまいますが、コツなどはありますか？</h3>
                        <ul>
                            <li>ビール充填時の注意＝常にタップを開いた状態でボトルを満たし、太陽光を避けてください。</li>
                            <li>サイトチューブなどに空気が溜まっている＝タップが温まってしまっている場合、最初は泡立ちますが、2杯目からはきれいに注げます。</li>
                            <li>中のビールが温まってしまいますと、泡ばかりになってしまうので、冷やしながらご使用ください。</li>
                            <li>ビールそのものの圧力が高い可能性がある＝例えば、UKEGで圧力の設定を5psiにしていても、醸造所で25psiに加圧されたビールの場合、圧力が均一になる数日間、ビールは泡立ち続けます。その場合、圧力が均一になるまで数時間お待ちください。</li>
                            <li>注いでいる間に量を量ろうとしている＝タップハンドルは完全に開いてください。また、注いでいる間は手放してください。注いでいる間に量を調整しようとしてタップを細かく開閉すると、泡がたくさん発生することがあります。</li>
                            <li>汚れがたまっている＝サイトチューブなどが汚れているか詰まっている可能性があります。「メンテナンス」を参照して、清掃してください。</li>
                            <li>ビールの量が上部継ぎ手の位置より少なくなると泡が多くなる＝内部で炭酸ガスが漏れている可能性があります。締め方を見直してください。</li>
                            <li>上記をすべてご確認いただいても注げない場合、他に問題がある可能性があります。「お問い合わせフォーム」からご連絡ください。</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default UkegTroubleshooting