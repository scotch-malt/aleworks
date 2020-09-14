import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/growlerlayout"
import maintenance1 from "../../images/growler/maintenance/maintenance1.jpg"
import maintenance2 from "../../images/growler/maintenance/maintenance2.jpg"
import maintenance3 from "../../images/growler/maintenance/maintenance3.jpg"
import maintenance4 from "../../images/growler/maintenance/maintenance4.jpg"
import maintenance5 from "../../images/growler/maintenance/maintenance5.jpg"
import maintenance6 from "../../images/growler/maintenance/maintenance6.jpg"
import maintenance7 from "../../images/growler/maintenance/maintenance7.jpg"
import maintenance8 from "../../images/growler/maintenance/maintenance8.jpg"
import maintenance9 from "../../images/growler/maintenance/maintenance9.jpg"
import maintenance10 from "../../images/growler/maintenance/maintenance10.jpg"
import maintenance11 from "../../images/growler/maintenance/maintenance11.jpg"
import maintenance12 from "../../images/growler/maintenance/maintenance12.jpg"
import SEO from "../../components/seo"
import "../../styles/ukeg-maintenance.scss"

const UkegMaintenance = () => {
    return (
        <Layout>
            <SEO title={`Ukeg メンテナンス`} />
            <div className="maintenance">
                <div className="maintenance-guide">
                    <Link to="/growler/ukeg-howto"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                    <Link to="/growler/ukeg-items"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                    <Link to="/growler/ukeg-maintenance"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                    <Link to="/growler/ukeg-warranty"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                    <Link to="/growler/ukeg-troubleshooting"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                    <Link to="/growler/ukeg-member"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
                </div>
                <div className="maintenance-main">
                    <h1 className="maintenance-main-title">メンテナンス</h1>
                    <div className="maintenance-main-cleaning">
                        <h2 className="maintenance-main-cleaning-title">清掃のしかた</h2>
                        <div className="maintenance-main-cleaning-block">
                            <h3 style={{fontWeight: "200"}}>必ず手洗いしてください。</h3>
                            <h3>&#9312; VPRキャップを外して、お湯（49℃以下）でボトルを洗い流します。</h3>
                            <div className="maintenance-main-cleaning-block-image">
                                <img src={maintenance1} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>3回洗い流してください。</li>
                                <li>アンモニアのような洗浄剤は使用しないでください。</li>
                                <li>キャップやスリーブも流水で洗ってください。</li>
                            </ul>
                        </div>
                        <div className="maintenance-main-cleaning-block">
                            <h3>&#9313; VPRキャップとカートリッジスリーブをお湯（49℃以下）ですすぎます。</h3>
                            <div className="maintenance-main-cleaning-block-image">
                                <img src={maintenance2} alt=""/>
                            </div>
                        </div>
                        <div className="maintenance-main-cleaning-block">
                            <h3>&#9314; お湯（49℃以下）をボトルに注ぎ、タップを開いて下向きにして振ります。</h3>
                            <div className="maintenance-main-cleaning-block-image">
                                <img src={maintenance3} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>タップから出てくるお湯（水）がきれいになるまで繰り返してください。</li>
                                
                            </ul>
                        </div>
                        <div className="maintenance-main-cleaning-block">
                            <h3>&#9315; お湯（49℃以下）でボトルを満たし、加炭酸ソーダ、セスキ炭酸ソーダ、重曹などを入れてよく振ります。</h3>
                            <div className="maintenance-main-cleaning-block-image">
                                <img src={maintenance4} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>64ozであれば大さじ一杯、128ozであれば大さじ2杯ほど入れてください。</li>
                                <li>石鹸は使用しないでください。</li>   
                            </ul>
                        </div>
                        <div className="maintenance-main-cleaning-block">
                            <h3>&#9316; VPRキャップを取り付けて、炭酸ガスカートリッジに残っている炭酸ガスを充填します。
タップに水を通して、タップを閉めます。</h3>
                            <div className="maintenance-main-cleaning-block-image">
                                <img src={maintenance5} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>10分程度待った後、ボトルが空になるか圧力が無くなるまでタップを開いてください。</li>   
                            </ul>
                        </div>
                        <div className="maintenance-main-cleaning-block">
                            <h3>&#9317; ボトルを空にして、すべての部品を洗い流します。</h3>
                            <div className="maintenance-main-cleaning-block-image">
                                <img src={maintenance6} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>タップロックは何回か動かしてよくすすいでください。</li>   
                            </ul>
                        </div>
                        <div className="maintenance-main-cleaning-block">
                            <h3>&#9318; ボトルからVPRキャップを外し、VPRキャップからカートリッジスリーブを外します。
タップを開いた状態で、乾いた場所に保管してください。</h3>
                            <div className="maintenance-main-cleaning-block-image">
                                <img src={maintenance7} alt=""/>
                            </div>
                            <ul style={{textAlign: 'start'}}>
                                <li>保管時はキャップを締めないでください。カビや腐敗の原因となります。</li>   
                            </ul>
                        </div>
                    </div>
                    <div className="maintenance-main-replacement">
                        <h2 className="maintenance-main-replacement-title">カートリッジシールの交換</h2>
                        <div className="maintenance-main-replacement-block">
                            <h3>&#9312; タブをつまんでリテーナーを引き抜きます。</h3>
                            <div className="maintenance-main-replacement-block-image">
                                <img src={maintenance8} alt=""/>
                            </div>
                        </div>
                        <div className="maintenance-main-replacement-block">
                            <h3>&#9313; 新しいシールを図の向きに挿入します。</h3>
                            <div className="maintenance-main-replacement-block-image">
                                <img src={maintenance9} alt=""/>
                            </div>
                        </div>
                        <div className="maintenance-main-replacement-block">
                            <h3>&#9314; リテーナーとシールを取り付けます。</h3>
                            <div className="maintenance-main-replacement-block-image">
                                <img src={maintenance10} alt=""/>
                            </div>
                        </div>
                        <div className="maintenance-main-replacement-block">
                            <h3>&#9315; 両側のタブの入る音がカチッと鳴るまでリテーナーを押し込みます。</h3>
                            <div className="maintenance-main-replacement-block-image">
                                <img src={maintenance11} alt=""/>
                            </div>
                        </div>
                        <div className="maintenance-main-replacement-block">
                            <h2>キャップOリングの交換</h2>
                            <h3>ぴったりとはまるようにキャップOリングを引っ張ります。</h3>
                            <div className="maintenance-main-replacement-block-image">
                                <img src={maintenance12} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default UkegMaintenance