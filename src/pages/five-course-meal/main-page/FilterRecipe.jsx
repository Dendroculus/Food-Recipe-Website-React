import React from "react";
import { FaCanadianMapleLeaf, FaHeart, FaSnowflake, FaLeaf, FaSun, FaGift } from "react-icons/fa";
import "./styles/FilterRecipe.css";
import { PiRabbit } from "react-icons/pi";
import { GiChickenOven, GiPumpkinLantern } from "react-icons/gi";

export default class FilterRecipe extends React.Component {
    render() {
        const { activeFilter, onChangeFilter } = this.props;
        return (
            <div className="filter-container">
                <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
                onClick={() => onChangeFilter('all')}>
                    All Recipes
                </button>
                <div className="filter-divider"></div>
                <h4 className="filter-category-title">Seasons</h4>
                <button className={`filter-btn ${activeFilter === 'winter' ? 'active': ''}`} 
                onClick={() => onChangeFilter('winter')}>
                    <FaSnowflake /> Winter
                </button>
                <button className={`filter-btn ${activeFilter === 'spring' ? 'active': ''}`} 
                onClick={() => onChangeFilter('spring')}>
                    <FaLeaf /> Spring
                </button>
                <button className={`filter-btn ${activeFilter === 'summer' ? 'active': ''}`} 
                onClick={() => onChangeFilter('summer')}>
                    <FaSun /> Summer
                </button>
                <button className={`filter-btn ${activeFilter === 'fall' ? 'active': ''}`} 
                onClick={() => onChangeFilter('fall')}>
                    <FaCanadianMapleLeaf /> Fall
                </button>
    
                <div className="filter-divider"></div>
    
                <h4 className="filter-category-title">Events</h4>
    
                <button className={`filter-btn ${activeFilter === 'christmas' ? 'active': ''}`} 
                    onClick={() => onChangeFilter('christmas')}>
                    <FaGift /> Christmas
                </button>
                <button 
                className={`filter-btn ${activeFilter === 'thanksgiving' ? 'active' : ''}`}
                onClick={() => onChangeFilter('thanksgiving')}>
                <GiChickenOven /> Thanksgiving
                </button>
                <button 
                className={`filter-btn ${activeFilter === 'valentine' ? 'active' : ''}`}
                onClick={() => onChangeFilter('valentine')}>
                <FaHeart /> Valentine
                </button>
                <button 
                className={`filter-btn ${activeFilter === 'easter' ? 'active' : ''}`}
                onClick={() => onChangeFilter('easter')}>
                <PiRabbit /> Easter
                </button>
                <button 
                className={`filter-btn ${activeFilter === 'halloween' ? 'active' : ''}`}
                onClick={() => onChangeFilter('halloween')}>
                <GiPumpkinLantern /> Halloween
                </button>
            </div>
        )
    }
}