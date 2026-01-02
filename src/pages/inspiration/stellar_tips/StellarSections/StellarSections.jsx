import React from "react";
import "../../stellar_tips/StellarTips.css";
import "./StellarSections.css";
import TipsCategory from "../TipsCategory/TipsCategory";
import ChefSecretCard from "../ChefSecretCard/ChefSecretCard";
import QuickTipsSection from "../QuickTipsSection/QuickTipsSection";
import { essentialTips, flavorTips, proTips, quickTips, chefSecret } from "../tipData";

class StellarSections extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      essentialTips,
      flavorTips,
      proTips,
      quickTips,
      chefSecret,
    };
  }

  render() {
    const { essentialTips: essential, flavorTips: flavor, proTips: pro, quickTips: quick, chefSecret: secret } = this.state;

    return (
      <>
        <section className="stellar-hero">
          <div className="container">
            <h1 className="main-title">Stellar Tips</h1>
            <p className="hero-subtitle">Pro cooking secrets from across the culinary cosmos ✨</p>
          </div>
        </section>

        <main className="container my-5">
          <TipsCategory
            title="Essential Techniques"
            icon="🌟"
            description="Master these fundamental skills and watch your cooking orbit to new heights"
            tips={essential}
          />

          <TipsCategory
            title="Flavor Enhancement"
            icon="🌶️"
            description="Unlock stellar flavors with these cosmic cooking secrets"
            tips={flavor}
          />

          <TipsCategory
            title="Pro Chef Secrets"
            icon="👨‍🍳"
            description="Insider techniques from the culinary constellation"
            tips={pro}
          />

          <ChefSecretCard secret={secret} />

          <QuickTipsSection quickTips={quick} />
        </main>
      </>
    );
  }
}

export default StellarSections;