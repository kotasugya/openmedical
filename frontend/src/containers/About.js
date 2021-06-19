import React from 'react'
import './about.css'

export const About = () => {
  return (
    <>
      <div className="main-contents">
        <div className="main-theme">
          openmedical
          <br />
          <span className="sub-theme">医療従事者の就職をもっとクリアに</span>
        </div>
      </div>
      <div className="sub-contents">
        <div className="title">openmedical</div>
        <div className="sub-title">
          医療従事者の就職時における情報格差を無くしたい
        </div>
        <div className="made-background">
          全国には約50万件近くの医療機関があります。
          <br />
          医療従事者向けの就職サービスが充実し、
          <br />
          多くの選択肢から就職先を選べるようになりました。
          <br />
          しかし、選択肢が多くなり過ぎて就職のミスマッチが増えている事も事実です。
          <br />
          openmedicalでは、医療従事者同士がオンライン上で情報を共有し合い、
          <br />
          可能な限り就職のミスマッチを減らしたい
          <br />
          という想いで作成しました。
        </div>
      </div>
    </>
  )
}
