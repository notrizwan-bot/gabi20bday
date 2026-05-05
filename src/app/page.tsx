import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ minHeight: "200vh", position: "relative" }}>
      {/* Background Overlap Text */}
      <div className="overlap-text" style={{ top: "10%", left: "5%" }}>LEGACY</div>
      <div className="overlap-text" style={{ top: "40%", right: "5%" }}>CHAOS</div>
      <div className="overlap-text" style={{ bottom: "10%", left: "15%" }}>GABI</div>

      {/* Marquee Header */}
      <div className="marquee-container">
        <div className="marquee-text">
          URGENT: GABI IS 20 • RETIRING FROM TEENHOOD • 20 YEARS OF UNPRECEDENTED CHAOS • LIMITED EDITION HUMAN • 
          URGENT: GABI IS 20 • RETIRING FROM TEENHOOD • 20 YEARS OF UNPRECEDENTED CHAOS • LIMITED EDITION HUMAN •
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(3rem, 15vw, 10rem)", lineHeight: 0.8, marginBottom: "2rem" }}>
          GABI<br/>
          <span className="highlight" style={{ fontSize: "0.4em", verticalAlign: "middle" }}>VERIFIED 20</span>
        </h1>
        <p style={{ fontSize: "1.5rem", maxWidth: "600px", margin: "0 auto", fontWeight: "600" }}>
          After two decades of market dominance in the "being a menace" industry, Gabi is officially pivoting to her 20s. 
          Expect a complete rebrand.
        </p>
      </section>

      {/* Stats Section */}
      <section className="chaotic-grid">
        <div className="brutalist-card" style={{ gridColumn: "span 6" }}>
          <h2>KPIs (Key Performance Indicators)</h2>
          <ul style={{ listStyle: "none", marginTop: "1rem", lineHeight: "2" }}>
            <li>• Coffee Addiction: <span className="highlight">LEVEL 99</span></li>
            <li>• Unanswered DMs: 4,500+</li>
            <li>• Sarcasm Accuracy: 99.8%</li>
            <li>• Retirement Age: 20</li>
          </ul>
        </div>
        
        <div className="brutalist-card" style={{ gridColumn: "span 6", background: "#000", color: "#fff" }}>
          <h2>OFFICIAL STATEMENT</h2>
          <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
            "I'm not getting older, I'm just becoming a more expensive version of myself."
          </p>
          <p style={{ marginTop: "1rem", fontSize: "0.8rem", opacity: 0.7 }}>
            — Gabi, Minutes after realizing her teen years are over.
          </p>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section style={{ padding: "4rem 2rem" }}>
        <h2 style={{ marginBottom: "2rem" }}>Visual Evidence (The Receipts)</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div className="brutalist-card" style={{ width: "300px", height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ opacity: 0.3 }}>[ INSERT ICONIC PHOTO 1 ]</span>
          </div>
          <div className="brutalist-card" style={{ width: "300px", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(2deg)" }}>
            <span style={{ opacity: 0.3 }}>[ INSERT ICONIC PHOTO 2 ]</span>
          </div>
          <div className="brutalist-card" style={{ width: "300px", height: "400px", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-3deg)" }}>
            <span style={{ opacity: 0.3 }}>[ INSERT ICONIC PHOTO 3 ]</span>
          </div>
        </div>
      </section>

      {/* Floating Stamp */}
      <div className="gabi-stamp">
        EST. 2006<br/>
        ORIGINAL<br/>
        GABI
      </div>

      <footer style={{ padding: "4rem", textAlign: "center", borderTop: "4px solid black" }}>
        <p>© 2006-2026 THE GABI FOUNDATION. ALL RIGHTS RESERVED. NO REFUNDS ON TEEN YEARS.</p>
      </footer>
    </main>
  );
}
