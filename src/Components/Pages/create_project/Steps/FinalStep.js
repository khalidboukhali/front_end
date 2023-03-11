import React,{ useContext, useState } from "react";
import { Formik, Form } from "formik";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import Button from '@material-ui/core/Button';
import CheckboxField from "../Controls/CheckBoxField";
import { multiStepContext } from "../Context/StepContext";
const FinalStep = () => {

    const {setStep,submitData} = useContext(multiStepContext);
    
    const [showFields, setShowFields] = useState(false);
    const [showFieldsJur,setShowFieldsJur] = useState(false);

    const handleRapportTechniqueChange = (event) => {
      setShowFields(event.target.checked);
    };

    const initialValues = {
      cinLegalisee: false,
      rapportTechnique: false,
      portant:false,
      factureDefinitive:false,
      demandeExamen:false,
      lienJuridique:false,
      demandeAideFinanciere: false,
      attestationApprobation:false,
      contratBail:false,
      titreFoncier:false,
      certificatPropriete:false,
      acteLegalise:false,
      planBornage:false,
      acteEngagement:false,
      engagementFournisseur:false,
      cinNonLegalise:false,
      autorisationPuits:false,
      delegationSubvention:false,
    };

    const validationSchema = {};

    const handleSubmit = (values) => {
      console.log(values);
    };

    return (
      <Box>
        <header>PIECES À FOURNIR AVEC LE DOSSIER DE SUBVENTION :</header>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
           {(formik) =>(
            <Form>
              <TableContainer component={Paper}>
                    <Table>
                      <TableHead sx={{ background: "#f5f5f5" }}>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold",fontSize:"18px",textAlign:"center" }}>Avant l'étude</TableCell>
                          <TableCell sx={{ fontWeight: "bold",fontSize:"18px",textAlign:"center" }}>Après l'étude</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                            <TableCell>
                            <CheckboxField name="cinLegalisee" label="1. CIN légalisée"/>
                            </TableCell>
                            <TableCell>
                            <CheckboxField name="demandeAideFinanciere" label="1. Demande de l’aide financière de l’État
                            (signée par le postulant)." />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                          <Box sx={{ mb: 1 }}>
                              <Typography variant="subtitle1" sx={{ mb: 1 }} style={{display:"inline-block"}}>
                               2. rapportTechnique
                              </Typography>
                                <FormControlLabel control={ <Checkbox checked={showFields} onChange={handleRapportTechniqueChange}
                                    inputProps={{ "aria-label": "show fields" }} />
                                }
                                />   
                            {showFields && (
                              <>
                              <CheckboxField name="portant" label="=> portant nom, prénom et adresse exacte de la ferme" />
                              <CheckboxField name="devis" label="=> Devis avec case TVA et portant nom, prénom et adresse exacte de la ferme" />
                              </>
                            )}   
                          </Box>                                  
                          </TableCell>
                          <TableCell>
                            <CheckboxField name="attestationApprobation" label="2. Attestation d’approbation (fournie par
                            l’office)." />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <CheckboxField name="demandeExamen" label="3. Demande d’examen préalable (signée par le postulant, légalisée et datée)" />
                          </TableCell>
                          <TableCell>
                            <CheckboxField name="factureDefinitive" label="3. Facture définitive (Originale, signée,
                              portant TVA et surface nette à équiper)portant nom, prénom et adresse exacte de la ferme" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Box sx={{ mb: 1 }}>
                                <Typography variant="subtitle1" sx={{ mb: 1 }} style={{display:"inline-block"}}>
                                4. Lien juridique :
                                </Typography>
                                  <FormControlLabel control={ <Checkbox checked={showFieldsJur} onChange={(event) =>setShowFieldsJur(event.target.checked)}
                                      inputProps={{ "aria-label": "show fields" }} />
                                  }
                                  />   
                              {showFieldsJur && (
                                <>
                                  <CheckboxField name="contratBail" label="=> Contrat de bail plus de 5 ans légalisé + Enregistrement" />
                                  <CheckboxField name="titreFoncier" label="=> Titre foncier" />
                                  <CheckboxField name="certificatPropriete" label="=> Certificat de propriété" />
                                  <CheckboxField name="acteLegalise" label="=> Acte Adulaire légalisé" />
                                  <CheckboxField name="planBornage" label="=> Plan de bornage" /> 
                                </>
                              )}   
                          </Box>             
                          </TableCell>
                          <TableCell>
                            <CheckboxField name="acteEngagement" label="4. Acte d’engagement légalisé par le
                              postulant" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <CheckboxField name="engagementFournisseur" label="5. Engagement fournisseur" />
                          </TableCell>
                          <TableCell>
                            <CheckboxField name="cinNonLegalise" label="5. CIN non légalisée" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <CheckboxField name="autorisationPuits" label="6. L’autorisation de puits" />
                          </TableCell>
                          <TableCell>
                            <CheckboxField name="delegationSubvention" label="Délégation de la subvention (signée et
                             légalisée par le postulant)" />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
              </TableContainer>
              <Button variant="contained" margin="auto" onClick={()=> {setStep(4)}} color="secondary">Back</Button>
              <Button variant="contained" type="submit" color="primary" onClick={submitData}>Submit</Button>   
            </Form>
           )}
        </Formik>
      </Box>
    )
}
export default FinalStep;