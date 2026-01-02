import React from "react";
import "./PaymentForms.css";

export default class PaymentInformation extends React.Component {
  render() {
    const { sections = [], form = {}, onChange } = this.props;
    if (!sections.length) return null;

    return (
      <>
        {sections.map((section) => (
          <section className="payment-section" key={section.sectionTitle}>
            <h2>{section.sectionTitle}</h2>

            {section.groups.map((group, gIdx) => {
              const gridClass = group.columns && group.columns > 1 ? "form-grid" : "";
              return (
                <div className={gridClass} key={`${section.sectionTitle}-g-${gIdx}`}>
                  {group.fields.map((f) => (
                    <div className="form-group" key={f.id}>
                      <label htmlFor={f.id}>{f.label}</label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.id] || ""}
                        maxLength={f.maxLength}
                        required={!!f.required}
                        onChange={onChange}
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </section>
        ))}
      </>
    );
  }
}