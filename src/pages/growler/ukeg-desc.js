import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/growlerlayout"
import GrowlerCard from "../../components/growlercard"
import Img from "gatsby-image"
import "../../styles/ukeg-desc.scss"

const UkegDesc = ({data}) => {
    
    return (
        <Layout>
            <div className="ukeg-desc">
                <div className="ukeg-desc-logo">
                    <Img fluid={data.logo.childImageSharp.fluid} style={{width: '100%', border: "1px solid transparent"}} />
                </div>
                <h1 className="ukeg-desc-title">UKEG™グラウラー</h1>
                <p className="ukeg-desc-howto">使い方やメンテナンスの方法などは、
                <a href="https://www.growlerwerks.com/pages/howto">「growlerwerks.com/howto」</a>にも詳しい説明やビデオがあります（英語版）。合わせてご参照ください。</p>
                <div className="ukeg-desc-guide">
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                    <Link to="/"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
                </div>
                <div className="ukeg-desc-5feature">
                    <h1 className="ukeg-desc-5feature-title">UKEGビアサーバー5つの特徴</h1>
                    <div className="ukeg-desc-5feature-image">
                        <Img fluid={data.graphic.childImageSharp.fluid} style={{width: "100%"}} />
                    </div>
                    <div className="ukeg-desc-5feature-list">
                        <p>①保冷機能に優れた真空断熱二重構造</p>
                        <p>②炭酸カードリッジを安全で簡単に装着</p>
                        <p>③コンパクトでどこでも持ち運び可能</p>
                        <p>④専門バーと同様の本格ビアサーバー機能</p>
                        <p>⑤炭酸飲料やカクテルでも使用が可能</p>
                    </div>  
                </div>
                <div className="ukeg-desc-products">
                  <h1 className="ukeg-desc-products-title">製品一覧</h1>
                  <GrowlerCard
                    img={data.bronze64}
                    type="64"
                    color="銅" 
                    volume="容量: 64オンス（1,893ml）" 
                    size="サイズ: 133mm x 207mm x 277mm" 
                    weight="重量: 1.6kg" 
                    accessories="付属品: CO2カートリッジ8g（2個入り）"
                    url="https://www.saketry.com/743030.html"
                  />  
                  <GrowlerCard 
                    img={data.stainless64}
                    type="64"
                    color="ステンレス"
                    volume="容量: 64オンス（1,893ml）" 
                    size="サイズ: 133mm x 207mm x 277mm" 
                    weight="重量: 1.6kg" 
                    accessories="付属品: CO2カートリッジ8g（2個入り）"
                    url="https://www.saketry.com/743029.html"
                  />  
                  <GrowlerCard
                    img={data.bronze128} 
                    type="128"
                    color="銅"
                    volume="容量: 128オンス（3,785ml）" 
                    size="サイズ: 172mm x 235mm x 303mm" 
                    weight="重量: 2.2kg" 
                    accessories="付属品: CO2カートリッジ16g（2個入り）"
                    url="https://www.saketry.com/743032.html"
                  />  
                  <GrowlerCard
                    img={data.stainless128}
                    type="128"
                    color="ステンレス"
                    volume="容量: 128オンス（3,785ml）" 
                    size="サイズ: 172mm x 235mm x 303mm" 
                    weight="重量: 2.2kg" 
                    accessories="付属品: CO2カートリッジ16g（2個入り）"
                    url="https://www.saketry.com/743031.html"
                  />  
                   
                </div>
            </div>
        </Layout>
    )
}

export default UkegDesc

export const pageQuery = graphql`
query ukegDescQuery {
  logo: file(relativePath: { eq: "growler/growler_logo.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  graphic: file(relativePath: { eq: "growler/UKeg_graphic.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  bronze64: file(relativePath: { eq: "growler/ukeg64bronze.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  stainless64: file(relativePath: { eq: "growler/ukeg64stainless.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  bronze128: file(relativePath: { eq: "growler/ukeg128bronze.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  stainless128: file(relativePath: { eq: "growler/ukeg128stainless.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}
` 