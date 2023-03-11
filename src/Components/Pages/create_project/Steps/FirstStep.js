import React, { useState,useContext } from 'react';
import {Form,Formik } from 'formik';
import * as yup from 'yup';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup,TextField,Typography } from '@material-ui/core';
import InputField from '../Controls/TextField';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import { multiStepContext } from '../Context/StepContext';

const validationSchema = yup.object({
    domaine: yup
    .string()
    .required('Domaine est requis'),
    situation_géographique: yup
    .string()
    .required('Situation géographique est requis'),
    propriètaire: yup
    .string()
    .required('Propriètaire est requis'),
    locataire: yup
    .string()
    .required('Locataire est requis'),
    superficie_totel: yup
    .string()
    .required('La superficie totel est requis'),
    superficie_à_équiper: yup
    .string()
    .required('la superficie à équiper est requis'),
    commercial: yup
    .string()
    .required('Le commercial est requis'),
    n_dossier: yup
    .string()
    .required('Le N° dossier est requis'),
    phone: yup
    .string('Saisir le N° télèphone')
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Le numéro de téléphone n\'est pas valide')
    .required('Le numéro de téléphone est requis'),
    etude: yup
    .string()
    .required('obligatoire de cocher une choix'),
    installation_principele: yup
    .string()
    .required('obligatoire de cocher un choix'),
    installation_porte_rampe:  yup
    .string()
    .required('obligatoire de cocher un choix'),

});
const initialValues= {
    domaine: '',
    situation_géographique: '',
    propriètaire: '',
    locataire: '',
    superficie_totel: '',
    superficie_à_équiper: '',
    commercial: '',
    n_dossier: '',
    phone: '',
    etude: '',
    installation_principele: '',
    installation_porte_rampe: ''
  }

    

const FirstStep = () => {

    const {setStep,setUserData,userData} = useContext(multiStepContext)

    const [selectedDate, setSelectedDate] = useState(new Date());
        
        const handleDateChange = (date) => {
            setSelectedDate(date);
        };


return ( 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit ={(values) =>{  
                    setUserData({ ...userData, ...values ,selectedDate});
                    setStep(2);
                }}
            
            >
            {formik => (
                <Form>

                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            label="Date"
                            format= 'yyyy-mm-dd'
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                            TextFieldComponent={TextField}
                        />
                    </MuiPickersUtilsProvider>

                    

                            <InputField name="domaine" value={userData.domaine} label="Domaine" />
                            <InputField name="situation_géographique" label="Situation géographique" />
                            <InputField name="propriètaire" label="Propriètaire" />
                            <InputField name="locataire" label="Locataire" />
                            <InputField name="superficie_totel" label="Superficie totel" />
                            <InputField name="superficie_à_équiper" label="Superficie à équiper" />
                            <InputField name="commercial" label="Commercial" />
                            <InputField name="n_dossier" label="N° dossier" />

                            <InputField name="phone" label="Numero de télephone" />
                    
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Choix de l'étude</FormLabel>
                                <RadioGroup row aria-label="etude" name="etude" value={formik.values.etude} onChange={formik.handleChange}>
                                    <FormControlLabel value="brumisation" control={<Radio />} label="Brumisation" />
                                    <FormControlLabel value="irrigation" control={<Radio />} label="Irrigation" />
                                    <FormControlLabel value="traitement" control={<Radio />} label="Traitement" />
                                </RadioGroup>
                                {formik.touched.etude && Boolean(formik.errors.etude) ? (
                                <FormHelperText error={Boolean(formik.errors.etude)} >{formik.errors.etude}</FormHelperText>
                                ) : null}
                            </FormControl>
                                    
                            <FormControl component="fieldset">
                                <FormLabel component="legend" >Choix Installation </FormLabel>
                                            <Typography variant="subtitle1" gutterBottom>Principale</Typography>
                                    <RadioGroup aria-label="installation_principele" name="installation_principele" row
                                            value={formik.values.installation_principele} onChange={formik.handleChange} style={{marginBottom: '10px'}}>
                                        <FormControlLabel value="PVC" control={<Radio />} label="PVC" />
                                        <FormControlLabel value="PEHD" control={<Radio />} label="PEHD" />
                                    </RadioGroup>
                                    {formik.touched.installation_porte_rampe && Boolean(formik.errors.installation_principele) ? (
                                        <FormHelperText error={Boolean(formik.errors.installation_principele)} >{formik.errors.installation_principele}</FormHelperText>
                                        ) : null}
                                            <Typography variant="subtitle1" gutterBottom>Porte rampe</Typography>
                                    <RadioGroup aria-label="installation_porte_rampe" name="installation_porte_rampe" row
                                            value={formik.values.installation_porte_rampe} onChange={formik.handleChange}>
                                    <FormControlLabel value="PVC" control={<Radio />} label="PVC" />
                                    <FormControlLabel value="PEHD" control={<Radio />} label="PEHD" />
                                    </RadioGroup>
                                    {formik.touched.installation_porte_rampe && Boolean(formik.errors.installation_porte_rampe) ? (
                                        <FormHelperText error={Boolean(formik.errors.installation_porte_rampe)} >{formik.errors.installation_porte_rampe}</FormHelperText>
                                        ) : null}
                            </FormControl>

                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </Form>   
            )} 
            </Formik>
);
};
export default FirstStep;