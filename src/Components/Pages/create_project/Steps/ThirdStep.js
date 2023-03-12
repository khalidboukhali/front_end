import { FormControl, FormControlLabel, RadioGroup,Radio, Typography } from '@material-ui/core'
import React, {useState,useContext} from 'react'
import * as yup from 'yup'
import { useFormik,FormikProvider, Form } from 'formik';
import {Button,Checkbox,Box,Stack  } from '@mui/material';
import InputAdornment  from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import InputField from '../Controls/TextField';
import { multiStepContext } from '../Context/StepContext';

const validationSchema  = yup.object().shape({
    authorisation: yup.string(),
    nombrePuits : yup.number().typeError('Saisir un nombre'),
    nombreForages: yup.number().typeError('Saisir un nombre'),
    fp1: yup.number().typeError('Saisir un nombre'),
    fp2: yup.number().typeError('Saisir un nombre'),
    fp3: yup.number().typeError('Saisir un nombre'),
    fp4: yup.number().typeError('Saisir un nombre'),
    fp5: yup.number().typeError('Saisir un nombre',),
    x1: yup.number().typeError('Saisir un nombre'),
    x2: yup.number().typeError('Saisir un nombre'),
    x3: yup.number().typeError('Saisir un nombre'),
    x4: yup.number().typeError('Saisir un nombre'),
    x5: yup.number().typeError('Saisir un nombre'),
    y1: yup.number().typeError('Saisir un nombre'),
    y2: yup.number().typeError('Saisir un nombre'),
    y3: yup.number().typeError('Saisir un nombre'),
    y4: yup.number().typeError('Saisir un nombre'),
    y5: yup.number().typeError('Saisir un nombre'),
    xn1: yup.number().typeError('Saisir un nombre'),
    xn2: yup.number().typeError('Saisir un nombre'),
    xn3: yup.number().typeError('Saisir un nombre'),
    xn4: yup.number().typeError('Saisir un nombre'),
    xn5: yup.number().typeError('Saisir un nombre'),
    yn1: yup.number().typeError('Saisir un nombre'),
    yn2: yup.number().typeError('Saisir un nombre'),
    yn3: yup.number().typeError('Saisir un nombre'),
    yn4: yup.number().typeError('Saisir un nombre'),
    yn5: yup.number().typeError('Saisir un nombre'),
    nombreBornes:  yup.number().min(0, 'Value cannot be less than 0').max(5, 'Value cannot be greater than 5'),
    borne1: yup.number().typeError('Saisir un nombre'),
    borne2: yup.number().typeError('Saisir un nombre'),
    borne3: yup.number().typeError('Saisir un nombre'),
    borne4: yup.number().typeError('Saisir un nombre'),
    borne5: yup.number().typeError('Saisir un nombre'),
    longueur: yup.number().typeError('Saisir un nombre'),
    largeur: yup.number().typeError('Saisir un nombre'),
    hauteur: yup.number().typeError('Saisir un nombre'),
    capacite: yup.number().typeError('Saisir un nombre'),
});

export default function ThirdStep() {

    const {setStep,setUserData,userData} = useContext(multiStepContext)
    const [showFields, setShowFields] = useState(false);
    const [showFieldsSup,setShowFieldsSup] = useState(false);

    function handleCheckboxChange(event) {
        setShowFields(event.target.checked);
    }

    function handleCheckboxChangeSup(event) {
        setShowFieldsSup(event.target.checked);
    }
    const formik = useFormik({
        initialValues: {
            authorisation:'',
            nombrePuits: '',
            nombreForages:'',
            fp1: '',
            fp2: '',
            fp3: '',
            fp4: '',
            fp5: '',
            x1: '',
            x2: '',
            x3: '',
            x4: '',
            x5: '',
            y1: '',
            y2: '',
            y3: '',
            y4: '',
            y5: '',
            xn1: '',
            xn2: '',
            xn3: '',
            xn4: '',
            xn5: '',
            yn1: '',
            yn2: '',
            yn3: '',
            yn4: '',
            yn5: '',
            nombreBornes: '',
            borne1: '',
            borne2: '',
            borne3: '',
            borne4: '',
            borne5: '',
            longueur: '',
            largeur: '',
            hauteur: '',
            capacite: '',
            dimension: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setUserData({...userData,...values});
            setStep(4);
        },
    });

    const {errors,touched}=formik

    const handleValueChange = (event) => {
        const newValue = event.target.value;
        // check if newValue is within the range of 0 and 5
        if (newValue >= 0 && newValue <= 5) {
          formik.setFieldValue('nombreBornes', newValue);
        }
      };
    
      const handleDecrement = () => {
        const newValue = parseInt(formik.values.nombreBornes) - 1;
        if (newValue >= 0) {
          formik.setFieldValue('nombreBornes', newValue.toString());
        }
      };
    
      const handleIncrement = () => {
        const newValue = parseInt(formik.values.nombreBornes) + 1;
        if (newValue <= 5) {
          formik.setFieldValue('nombreBornes', newValue.toString());
        }
      };
    return (
    <Box className="stepContent"> 
        <header>Ressources En Eau</header>
        <FormikProvider value={formik}>
            <Form className="form">            
            <FormControl component="fieldset">
                <Box display="flex" alignItems= "center">
                    <Box mr={1}>
                        <Typography variant="subtitle1" gutterBottom>Autorisation de pompage</Typography>
                    </Box>
                        <RadioGroup row aria-label="authorisation" name="authorisation" value={formik.values.authorisation} onChange={formik.handleChange}>
                        <FormControlLabel value="yes" control={<Radio />} label="OUI" />
                        <FormControlLabel value="no" control={<Radio />} label="NON" />
                    </RadioGroup>
                </Box>
              {errors.authorisation && touched.authorisation && <Typography color="error">{errors.authorisation}</Typography>}
            </FormControl>
            <Box>
                <Box mb={2}>
                    <Typography variant="subtitle1" gutterBottom>Forage/Puits : (à numéroter sur le plan)</Typography>
                </Box>
                <Stack direction="row" spacing={2}>
                    <InputField name="nombrePuits" label="Nombre de puits" className="input-field" />
                    <InputField name="nombreForages" label="Forages" className="input-field" />
                </Stack>
            </Box>
            <Box className="details">
                <Typography variant="subtitle1" gutterBottom>
                    Débit et pression :
                </Typography>
                <Stack direction="row" spacing={2}>
                    <InputField name="fp1" label="F/P n°1" className="input-field" />
                    <InputField name="fp2" label="F/P n°2" className="input-field" />
                    <InputField name="fp3" label="F/P n°3" className="input-field" />
                    <InputField name="fp4" label="F/P n°4" className="input-field" />
                    <InputField name="fp5" label="F/P n°5" className="input-field" /> 
                </Stack>
            </Box>          
            <Box className="details">
                <Box className="title">
                    Cordonnée lambert :
                </Box>
                <Box className="fields2">
                    <Stack direction="row" spacing={2} className="x-axis">
                        <InputField name="x1" label="X1" className="text-field" />
                        <InputField name="x2" label="X2" className="text-field" />
                        <InputField name="x3" label="X3" className="text-field" />
                        <InputField name="x4" label="X4" className="text-field" />
                        <InputField name="x5" label="X5" className="text-field" />
                    </Stack>
                    <Stack direction="row" spacing={2} className="y-axis">
                        <InputField name="y1" label="Y1" className="text-field" />
                        <InputField name="y2" label="Y2" className="text-field" />
                        <InputField name="y3" label="Y3" className="text-field" />
                        <InputField name="y4" label="Y4" className="text-field" />
                        <InputField name="y5" label="Y5" className="text-field" />
                    </Stack>
                </Box>
            </Box>

            <Box className="details">
                <Box className="title">
                    Bornes d’irrigation : (à numéroter sur le plan)
                </Box>
                <Box className="fields">
                    <InputField name="nombreBornes" label="Nombre de bornes" className="input-field" onChange={handleValueChange}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleDecrement}
                                disabled={
                                    formik.values.nombreBornes === '' ||
                                    parseInt(formik.values.nombreBornes) === 0
                                }
                            >
                                <RemoveIcon />
                            </IconButton>
                            <IconButton
                                onClick={handleIncrement}
                                disabled={
                                    formik.values.nombreBornes === '' ||
                                    parseInt(formik.values.nombreBornes) === 5
                                }
                            >
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                    />
                </Box>
            </Box>
            
            <Box className="details">
                <Box className="title">
                    Débit et pression par Borne :
                </Box>
                <Box className="fields">
                    <Stack direction="row" spacing={2}>
                        <InputField name="borne1" label="Borne n°1" className="input-field" />
                        <InputField name="borne2" label="Borne n°2" className="input-field" />
                        <InputField name="borne3" label="Borne n°3" className="input-field" />
                        <InputField name="borne4" label="Borne n°4" className="input-field" />
                        <InputField name="borne5" label="Borne n°5" className="input-field" />
                    </Stack>
                </Box>
            </Box>


            <Box className="details">
                <Box className="title">
                    Cordonnée Lambert par norme :
                </Box>
                <Box className="fields2">
                    <Stack direction="row" spacing={2} className="x-axis">
                        <InputField name="xn1" label="X1" className="text-field" />
                        <InputField name="xn2" label="X2" className="text-field" />
                        <InputField name="xn3" label="X3" className="text-field" />
                        <InputField name="xn4" label="X4" className="text-field" />
                        <InputField name="xn5" label="X5" className="text-field" />
                    </Stack>
                    <Stack direction="row" spacing={2} className="y-axis">
                        <InputField name="yn1" label="Y1" className="text-field" />
                        <InputField name="yn2" label="Y2" className="text-field" />
                        <InputField name="yn3" label="Y3" className="text-field" />
                        <InputField name="yn4" label="Y4" className="text-field" />
                        <InputField name="yn5" label="Y5" className="text-field" />
                    </Stack>
                </Box>
            </Box>

            <Box sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Bassin :
                </Typography>
                <Stack direction="column">
                    <Box sx={{ mb: 1 }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                    Existant (à localiser sur le plan)
                </Typography>
                <FormControlLabel control={ <Checkbox checked={showFields} onChange={handleCheckboxChange}
                    inputProps={{ "aria-label": "show fields" }} />
                }
                />
                {showFields && (
                    <Stack direction="row" spacing={2}>
                    <InputField
                    name="longueur"
                    label="Longueur"
                    className="input-field"
                    />
                    <InputField
                        name="largeur"
                        label="Largeur"
                        className="input-field"
                    />
                    <InputField
                        name="hauteur"
                        label="Hauteur"
                        className="input-field"
                    />
                </Stack>
                )}
                </Box>
                <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    A proposer
                </Typography>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={showFieldsSup}
                        onChange={handleCheckboxChangeSup}
                        inputProps={{ "aria-label": "show fields" }}
                    />
                    }
                />
                {showFieldsSup && (
                    <Stack direction="row" spacing={2}>
                    <InputField
                        name="capacite"
                        label="Capacite"
                        className="input-field"
                    />
                    <InputField
                        name="dimension"
                        label="Dimension"
                        className="input-field"
                    />
                    </Stack>
                )}
                </Box>
            </Stack>
            </Box>
            <Box className='button_container'>
                <Button variant="contained" type="button" onClick={()=> {setStep(2)}}>Back</Button>
                <Button variant="contained" type="submit" color="primary">Next</Button>
            </Box>
          </Form>
        </FormikProvider>
    </Box>
    );
}