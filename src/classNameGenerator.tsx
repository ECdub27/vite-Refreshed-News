import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";

ClassNameGenerator.configure(
    (componentName) => `generated-name${componentName}`,
  );
  ClassNameGenerator.configure(
    (componentName) => componentName.replace('mui', ''),
  );



  