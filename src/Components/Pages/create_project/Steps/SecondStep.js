import React, { useContext } from 'react';
import {Form, Formik } from 'formik';
import * as yup from 'yup';
import {Box,Button,FormHelperText,Typography} from '@material-ui/core';
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import InputField from '../Controls/TextField';
import {multiStepContext} from '../Context/StepContext';
const validationSchema = yup.object({
    maraichage: yup 
    .string()
    .required('obligatoire de cocher un choix') ,
    culture: yup
    .string()
    .required('Ce champ est obligatoire'),
    distance_entre_lignes: yup
    .number()
    .typeError("Entrez un nombre valide")
    .positive("Le nombre doit être positif")
    .required("Ce champ est obligatoire"),
    distance_entre_plante: yup
    .number()
    .typeError("Entrez un nombre valide")
    .positive("Le nombre doit être positif")
    .required("Ce champ est obligatoire"),
    nbre_de_rempes_par_ligne: yup
    .number()
    .typeError("Entrez un nombre valide")
    .positive("Le nombre doit être positif")
    .required("Ce champ est obligatoire"),
    sens_de_plantation: yup
    .string()
    .required('Ce champ est obligatoire'),
    arboriculture_culture: yup
    .string()
    .required('Ce champ est obligatoire'),
    distance_entre_lignes_de_plantation: yup
    .number()
    .typeError("Entrez un nombre valide")
    .positive("Le nombre doit être positif")
    .required("Ce champ est obligatoire"),
    distance_entre_les_arabres: yup
    .number()
    .typeError("Entrez un nombre valide")
    .positive("Le nombre doit être positif")
    .required("Ce champ est obligatoire"),
    arboriculture_nbre_de_rempes_par_ligne: yup
    .number()
    .typeError("Entrez un nombre valide")
    .positive("Le nombre doit être positif")
    .required("Ce champ est obligatoire"),
    nbre_de_goutteurs_par_arabre: yup
    .number()
    .typeError("Entrez un nombre valide")
    .positive("Le nombre doit être positif")
    .required("Ce champ est obligatoire"),
    
});

const initialValues = {
    maraichage: '',
    culture: '',
    distance_entre_lignes: '',
    distance_entre_plante: '',
    nbre_de_rempes_par_ligne: '',
    sens_de_plantation: '',
    arboriculture_culture: '',
    distance_entre_lignes_de_plantation: '',
    distance_entre_les_arabres: '',
    arboriculture_nbre_de_rempes_par_ligne: '',
    nbre_de_goutteurs_par_arabre: ''
};

const SecondStep = () => {

  const {setStep,setUserData,userData} = useContext(multiStepContext)

  return (

    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit ={(values) =>{  
          setUserData({...userData,...values});
          setStep(3);
        }}
            
    >
            {formik => (
                <Form>
                      <header>CULTURES :</header>  
                        <FormControl component="fieldset">
                                <Typography variant="subtitle1" gutterBottom>Maraîchage</Typography>
                                <RadioGroup row aria-label="maraichage" name="maraichage"
                                            value={formik.maraichage} onChange={formik.handleChange} >
                                    <FormControlLabel value="plein_champs" control={<Radio />} label="Plein champs" />
                                    <FormControlLabel value="sous_serre" control={<Radio />} label="Sous serre" />
                                </RadioGroup>
                                {formik.touched.maraichage && Boolean(formik.errors.maraichage) ? (
                              <FormHelperText error={Boolean(formik.errors.maraichage)} >{formik.errors.maraichage}</FormHelperText>
                              ) : null}
                        </FormControl>
                        
                            <InputField name="culture" label="Culture" value={formik.culture} onChange={formik.handleChange}/>
                            <InputField name="distance_entre_lignes" value={formik.distance_entre_lignes} onChange={formik.handleChange} label="Distance entre lignes" />
                            <InputField name="distance_entre_plante" value={formik.distance_entre_plante} onChange={formik.handleChange} label="Distance entre plante"  />
                            <InputField name="nbre_de_rempes_par_ligne" value={formik.nbre_de_rempes_par_ligne} onChange={formik.handleChange} label="Nbre de rempes par ligne" />
                            
                            <FormControl >
                                <InputLabel id="demo-simple-select-label">Sens de plantation</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="sens_de_plantation"
                                    name="sens_de_plantation"
                                    label="Sens de plantation"
                                    value={formik.sens_de_plantation}
                                    onChange={formik.handleChange}
                                    defaultValue='droit'
                                >
                                    <MenuItem value="droit" >La plantation en ligne droite</MenuItem>
                                    <MenuItem value="quinconce" >La plantation en quinconce</MenuItem>
                                    <MenuItem value="cercle" >La plantation en cercle</MenuItem>
                                    <MenuItem value="carré" >La plantation en carré</MenuItem>
                                </Select>
                                {formik.touched.sens_de_plantation && Boolean(formik.errors.sens_de_plantation) ? (
                                  <FormHelperText error={Boolean(formik.errors.sens_de_plantation)} >{formik.errors.sens_de_plantation}</FormHelperText>
                                  ) : null}
                            </FormControl>
                        
                        <Box>
                            <Typography variant="subtitle1" gutterBottom>
                            Arboriculture
                            </Typography>
                            <InputField name="arboriculture_culture" label="Culture" value={formik.arboriculture_culture} onChange={formik.handleChange} />
                            <InputField name="distance_entre_lignes_de_plantation" label="Distance entre lignes de plantation" value={formik.distance_entre_lignes_de_plantation} onChange={formik.handleChange} />
                            <InputField name="distance_entre_les_arabres" label="Distance entre les arabres" value={formik.distance_entre_les_arabres} onChange={formik.handleChange} />
                            <InputField name="arboriculture_nbre_de_rempes_par_ligne" label="Nbre de rempes par ligne" value={formik.arboriculture_nbre_de_rempes_par_ligne} onChange={formik.handleChange} />
                            <InputField name="nbre_de_goutteurs_par_arabre" label="Nbre de goutteurs par arabre" value={formik.nbre_de_goutteurs_par_arabre} onChange={formik.handleChange} />
                        </Box>
                        <Button variant="contained" type="button" onClick={()=> {setStep(1)}} color="secondary">Back</Button>
                        <Button variant="contained" type="submit" color="primary">Next</Button>                 
                </Form>
            )}
    </Formik>

  );
};

export default SecondStep;