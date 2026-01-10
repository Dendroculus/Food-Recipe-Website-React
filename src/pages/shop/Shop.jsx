import React from 'react';
import Navbar from '../../components/navigations/Navbar';
import Footer from '../../components/footer/Footer';
import Modals from "../../components/modals/Modals";

/**
 * ShopPageLayout
 *
 * Simple page layout component for shop pages. Renders the site navigation,
 * children content area, footer, and global modals.
 *
 * Props:
 * - children: React nodes to render inside the shop page content area
 */
class ShopPageLayout extends React.Component {
  render() {
    return (
      <div className="shop-page">
        <Navbar />
        {this.props.children}
        <Footer />
        <Modals />
      </div>
    );
  }
}


export default ShopPageLayout;