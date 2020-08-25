import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/growlerlayout"
import items1 from "../../images/growler/items/items1.jpg"
import items2 from "../../images/growler/items/items2.jpg"
import "../../styles/ukeg-items.scss"

const UkegItems = () => {
    return (
        <Layout>
            <div className="items">
                <div className="items-guide">
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
                </div>
                <div className="items-main">
                    <h1 className="items-main-title">各部の名称</h1>
                    <h3 className="items-main-info">ケグ全体</h3>
                    <div className="items-main-image1">
                        <img src={items1} alt=""/>
                    </div> 
                    <h3 className="items-main-info">VPR（Variable Pressure Regulation）キャップ</h3>
                    <div className="items-main-image2">
                        <img src={items2} alt=""/>
                    </div>
                    <h3 className="items-main-info">警告</h3>
                    <ul style={{textAlign: 'start'}}>
                        <li>炭酸ガスカートリッジの取り扱いには十分注意し、すべての指示に従ってください。カートリッジの取り付けおよび取り外しを行うときは、カートリッジスリーブの底面を身体から遠ざけてください。 加圧されている場合、カートリッジをVPRキャップから取り外さないでください。</li>
                        <li>低温やけどの危険があります。 炭酸ガスガスと使用済みカートリッジは非常に冷たくなる場合があります。 取り扱いには十分注意してください。 炭酸ガスカートリッジを取り外すときは、VPRキャップとカートリッジスリーブの接続部を常に体から離しておいてください。</li>
                        <li>炭酸ガスカートリッジは、飲料用のみに使用できます。 また、18歳未満の未成年者への販売は禁じられています。</li>
                        <li>炭酸ガスカートリッジの中身を吸い込まないでください。 誤って吸い込むと、身体に危害が加わる恐れがあります。</li>
                        <li>本製品は破裂すると破片が飛び散る恐れがあります。</li>
                        <li>誤った使い方をすると大変危険です。</li>
                        <li>焼却しないでください。</li>
                        <li>太陽光や熱にさらさないでください。</li>
                        <li>49°Cを超える場所に保管しないでください。</li>
                        <li>子供の手の届くところに置かないでください。</li>
                        <li>PROP65警告：本製品に使用されている黄銅はFDAに準拠した低鉛合金ですが、完全に鉛フリーではありません。本製品には、米国カリフォルニア州で癌／先天性な障害／その他の生殖障害を引き起こすことが知られている化学物質が含まれています。</li>
                    </ul> 
                </div>
            </div>

        </Layout>
    )
}

export default UkegItems