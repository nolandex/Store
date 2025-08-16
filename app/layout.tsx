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
              
              Tawk_API.customStyle = {
                visibility : {
                  desktop : {
                    position : 'br',
                    xOffset : 20,
                    yOffset : 20
                  },
                  mobile : {
                    position : 'br',
                    xOffset : 10,
                    yOffset : 10
                  }
                }
              };
              
              // Disable all greeting messages and attention grabbers
              Tawk_API.onLoad = function(){
                // Remove all greeting bubbles and suggestion messages
                var style = document.createElement('style');
                style.innerHTML = \`
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
                \`;
                document.head.appendChild(style);
                
                // Disable all Tawk.to popups and messages
                if(typeof Tawk_API.setAttributes === 'function') {
                  Tawk_API.setAttributes({
                    'name': '',
                    'email': '',
                    'hash': ''
                  }, false);
                }
              };
              
              // Prevent any greeting messages from appearing
              Tawk_API.onChatStarted = function(){
                // Clean interface without any suggestions
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
