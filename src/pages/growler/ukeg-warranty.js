import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/growlerlayout"
import SEO from "../../components/seo"
import "../../styles/ukeg-warranty.scss"

const UkegWarranty = () => {
    return (
        <Layout>
            <SEO title={`Ukeg 保証規定`} />
            <div className="warranty">
                <div className="warranty-guide">
                    <Link to="/growler/ukeg-howto"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                    <Link to="/growler/ukeg-items"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                    <Link to="/growler/ukeg-maintenance"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                    <Link to="/growler/ukeg-warranty"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                    <Link to="/growler/ukeg-troubleshooting"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                    <Link to="/growler/ukeg-member"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
                </div>
                <div className="warranty-main">
                    <h1 className="warranty-main-title">保証規定</h1>
                    <br/>
                    <h3>保証期間内に、正常な使用範囲において故障・損傷が発生した場合、無償で修理を行う。 ただし、次の場合においては、保証期間内であっても有償での修理となる。</h3>
                    <p>&#9312; 本保証書を提示されない場合</p>
                    <p>&#9313; 本保証書に必要事項が記載されていない、または字句を書き換えた場合</p>
                    <p>&#9314; 本保証書に、販売店発行の領収書（※Sakerty購入の場合は納品書）が添付されていない場合</p>
                    <p>&#9315; ご使用における著しい誤り（取扱説明書で禁じている操作など）、あるいは不当な改造や修理に起因する故障と認められる場合</p>
                    <p>&#9316; 高所からの落下や強烈な衝撃に起因する故障や損傷の場合</p>
                    <p>&#9317; 天災地変、および公害等、不可抗力による故障や損傷の場合</p>
                    <p>&#9318; 消耗品、磨耗品の取替え修理</p>
                    <h2>本保証書は日本国内のみ有効</h2>
                    <ul>
                        <li>本証明書により、お客様の法律上の権利を制限するものではありません。</li>
                        <li>保証期間終了後の修理対応などについてご不明な点は、<a style={{textDecoration: "underline"}} href="mailto:info@tokyoaleworks.com">info@tokyoaleworks.com</a>までお問い合わせください。</li>
                    </ul>
                </div>
            </div>

        </Layout>
    )
}

export default UkegWarranty