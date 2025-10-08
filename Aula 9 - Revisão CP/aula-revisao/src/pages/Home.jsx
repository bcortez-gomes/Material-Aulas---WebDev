import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Home() {
  const [repositorios, setRepositorios] = useState([]);

  
  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=node")
      .then(response => response.json())
      .then(data => setRepositorios(data.items));
  }, []);


  return (
    <div>
      <main className="p-6">
        <p className="text-center">Lista de Repositórios </p>
      </main>
      <div className="div">
        <Section>
          {repositorios.map((repostorio) => {
            return(
              <Card
                title={repostorio.name}
                description={repostorio.description}
              />
            )
          })}
        </Section>
      </div>
    </div>
  );
}
