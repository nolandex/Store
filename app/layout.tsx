import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bisnovo Learning - Platform Pembelajaran Bisnis Digital",
  description:
    "Pelajari berbagai bisnis digital dari modal minim hingga jutaan rupiah. Web development, digital marketing, design services, dan banyak lagi.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body>
        {children}
        <Script
          id="tawk-to-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              
              Tawk_API.onLoad = function(){
                var style = document.createElement('style');
                style.innerHTML = \`
                  /* Remove greeting bubbles and suggestion messages */
                  #tawk-bubble-container,
                  .tawk-bubble,
                  .tawk-attention-grabber,
                  .tawk-greeting-bubble,
                  .tawk-suggestion-bubble,
                  [id*="tawk"][class*="bubble"],
                  [class*="tawk-bubble"],
                  [class*="attention-grabber"] {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                  }
                  
                  /* Mobile popup styling - only when maximized */
                  @media (max-width: 768px) {
                    .tawk-max-container {
                      position: fixed !important;
                      bottom: 20px !important;
                      right: 10px !important;
                      left: 10px !important;
                      width: calc(100vw - 20px) !important;
                      max-width: 350px !important;
                      height: 450px !important;
                      max-height: calc(100vh - 100px) !important;
                      border-radius: 12px !important;
                      box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important;
                      z-index: 999999 !important;
                      margin: 0 auto !important;
                    }
                    
                    .tawk-max-container iframe {
                      border-radius: 12px !important;
                    }
                  }
                  
                  /* Desktop popup styling - only when maximized */
                  @media (min-width: 769px) {
                    .tawk-max-container {
                      position: fixed !important;
                      bottom: 80px !important;
                      right: 20px !important;
                      width: 380px !important;
                      height: 500px !important;
                      border-radius: 12px !important;
                      box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important;
                    }
                  }
                  
                  /* Keep minimized widget small */
                  .tawk-min-container {
                    width: 60px !important;
                    height: 60px !important;
                  }
                \`;
                document.head.appendChild(style);
              };
              
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/689fd6f4de044319242d07c5/1j2o5vb4b';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
