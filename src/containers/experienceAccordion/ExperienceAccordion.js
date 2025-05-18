import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  const [expanded, setExpanded] = useState(
    props.sections.map((section) => section.title)
  );

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion
          accordion={false}
          expanded={expanded}
          onChange={({ expanded: nextExpanded }) => setExpanded(nextExpanded)}
        >
          {props.sections.map((section) => (
            <Panel
              className="accord-panel"
              title={section.title}
              key={section.title}
              panelKey={section.title} // <-- required for controlled behavior
            >
              {section.experiences.map((experience, idx) => (
                <ExperienceCard
                  key={idx}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </Panel>
          ))}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
