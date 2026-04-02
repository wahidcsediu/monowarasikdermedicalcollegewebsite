import { GoogleGenAI, Type } from "@google/genai";
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const urls = [
  "https://docs.google.com/document/d/14xHKpOif4U2UPi1yLaaTu0ALuOFkKIqS/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1CiB25yrOsDJbiiNMcRrr7TQws52ZnQ55/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1ipGeJgiHoL3fgK4AFUdf_5Vy_qL7flKr/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1tQOfglGcJe7yt1kaAYCIBKp2SXSc_gHv/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1pIUzItQis0srbIsdrddpP0nykbC4pRY6/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1AV2gi2YrKeObdSzyPiAvn-zTVwuWHUCH/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1MppXDH07qliY9Yn_o6SUWNzqg5zwMaUp/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1czTBoPAcckAnHhlcf2KcxAWS1Jo-XsrX/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1ly9VJWOWcy7jyGd_8eqAJvRxS94Imiwn/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1hnLmb8Wv_ck8EHkPPd8EJtLcPe4S0M0z/edit?usp=sharing&ouid=115501873305630203138&rtpof=true&sd=true",
  "https://docs.google.com/document/d/1mPeE6lXtK48zkKT2euina1GIZiOIL-Xc/edit?usp=sharing&rtpof=true&sd=true"
];

async function extractFaculty() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Extract all faculty information from the provided URLs. For each faculty member, provide: id (kebab-case name), name, specialty, qualification, designation, experience (default '5+ Years' if not found), image (default 'https://lh3.googleusercontent.com/d/13I2fme5OGbsbS5JAsSxet0o0Sz-rZspF'), and a short professional message.",
    config: {
      tools: [{ urlContext: {} }],
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            name: { type: Type.STRING },
            specialty: { type: Type.STRING },
            qualification: { type: Type.STRING },
            designation: { type: Type.STRING },
            experience: { type: Type.STRING },
            image: { type: Type.STRING },
            message: { type: Type.STRING },
          },
          required: ["id", "name", "specialty", "qualification", "designation", "experience", "image", "message"],
        },
      },
    },
  });

  fs.writeFileSync('faculty_data.json', response.text);
  console.log("Faculty data extracted to faculty_data.json");
}

extractFaculty().catch(console.error);
