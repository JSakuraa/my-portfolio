import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main>
      <section>
        <Typewriter
          options={{
            strings: ["Hello World"],
            autoStart: true,
            loop: true,
          }}
        />
      </section>
    </main>
  );
}
