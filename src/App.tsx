import React from "react";
import logo from "./assets/logo.jpg";
import bike1 from "./assets/m.jpg";

export default function App() {
  const shopName = "My Mechanic Motorcycle Shop";

  const services = [
    {
      title: "Harley-Davidson Diagnostic Tools",
      desc: "Professional-grade tools for system diagnostics, active testing, module programming, real-time data monitoring, and settings adjustments."
    },
    {
      title: "Factory 47 Dealer",
      desc: "We install all handlebars, engine guards, and accessories."
    },
    {
      title: "S&S Certified Dealer",
      desc: "Engine replacement, upgrades, and all maintenance."
    },
    {
      title: "Scheduled Services",
      desc: (
        <>
          Complete 1K, 5K, 10K, 15K, and 20K maintenance services.
          <span style={{ display: "block", marginTop: 6, fontSize: 13, color: "#777" }}>
            (Factory Warranty will not be voided / FTC Action 2022)
          </span>
        </>
      )
    },
    {
      title: "Engine Upgrades",
      desc: "Performance upgrades to get the most power out of your Harley."
    },
    {
      title: "Insurance Claim Service",
      desc: "We work with all insurance companies to handle your claim smoothly."
    },
    {
      title: "Custom Work",
      desc: "Custom builds and modifications tailored to your bike."
    },
    {
      title: "Full-Service Shop",
      desc: "From minor fixes to full rebuilds — we do it all."
    }
  ];

  return (
    <div style={{ fontFamily: "system-ui, Arial", color: "#1a1a1a" }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        alignItems: "center",
        borderBottom: "1px solid #eee"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={logo} style={{ height: 50 }} />
          <div>
            <strong>{shopName}</strong>
            <div style={{ fontSize: 12, color: "#777" }}>
              Harley-Davidson Motorcycles
            </div>
          </div>
        </div>

        <div>
          <a href="#services" style={{ marginRight: 20 }}>Services</a>
          <a href="#about" style={{ marginRight: 20 }}>About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        display: "flex",
        padding: "70px 40px",
        gap: 40,
        alignItems: "center",
        background: "#fafafa"
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 40 }}>
            30+ Years of Experience
          </h1>

          <h2 style={{ color: "#e76f00", marginTop: 15 }}>
            Harley-Davidson Certified Master Technician
          </h2>

          <p style={{ color: "#555", maxWidth: 500, marginTop: 20 }}>
            Our Mission: To get you back home safe
          </p>

          <a href="tel:6265423904">
            <button style={{
              background: "#e76f00",
              color: "white",
              padding: "14px 28px",
              border: "none",
              borderRadius: 8,
              marginTop: 20,
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              📞 Call Shop
            </button>
          </a>
        </div>

        <img
          src={bike1}
          style={{
            flex: 1,
            height: 350,
            objectFit: "cover",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        />
      </div>

      {/* SERVICES */}
      <div id="services" style={{ padding: "70px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 30
        }}>
          {services.map((service) => (
            <div key={service.title} style={{
              padding: 25,
              background: "white",
              borderRadius: 12,
              border: "1px solid #eee",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{ marginBottom: 10 }}>{service.title}</h3>
              <p style={{ color: "#555", fontSize: 14 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" style={{
        padding: "70px 40px",
        textAlign: "center",
        background: "#fafafa"
      }}>
        <h2>About Us</h2>

        <p style={{ maxWidth: 700, margin: "15px auto", color: "#555", lineHeight: 1.7 }}>
          We are a family-owned motorcycle shop proudly serving all Harley-Davison riders. 
          From our most classic models to the newest line of Harley Machines out there. 
          I have been working on these machines for 30+ years.
        </p>

        <p style={{ maxWidth: 700, margin: "15px auto", color: "#555", lineHeight: 1.7 }}>
          After 25+ years at a local Harley-Davidson Dealer we opened our Family Shop in 2017 and have been blessed to serve our communities ever since.
        </p>

        <p style={{ maxWidth: 700, margin: "15px auto", color: "#555", lineHeight: 1.7 }}>
          You are all welcome to stop by anytime.
        </p>

        <p style={{ marginTop: 20, fontWeight: "bold" }}>
          Have a safe ride.
        </p>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{
        padding: "70px 40px",
        textAlign: "center"
      }}>
        <h2>Contact</h2>

        <p>
          📍 2428 Durfee Ave. Unit C<br />
          El Monte, CA 91732
        </p>

        <p>
          📞 Shop: <a href="tel:6265423904">(626) 542-3904</a>
        </p>

        <p>
          📱 Cell: <a href="tel:6263777662">(626) 377-7662</a>
        </p>

        <p>
          ✉️ <a href="mailto:mymechanic@mymechanicmotorcycleshop.com">
            mymechanic@mymechanicmotorcycleshop.com
          </a>
        </p>

        <div style={{ marginTop: 30 }}>
          <iframe
            src="https://www.google.com/maps?q=2428+Durfee+Ave+El+Monte+CA+91732&z=16&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: 12 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        background: "#111",
        color: "#aaa",
        textAlign: "center",
        padding: 20,
        fontSize: 14
      }}>
        © {new Date().getFullYear()} {shopName}
      </div>

    </div>
  );
}
