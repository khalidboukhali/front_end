import { FormControl, FormControlLabel, RadioGroup,Radio, Typography, TextField, FormHelperText, Box } from '@material-ui/core'
import * as yup from 'yup'
import { Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { multiStepContext } from '../Context/StepContext';

const validationSchema  = yup.object({
    filtration: yup
    .string()
    .required('obligatoire de cocher un choix'),
    commande_des_vannes: yup
    .string()
    .required('obligatoire de cocher un choix'),
    fertigation: yup
    .string()
    .required('obligatoire de cocher un choix'),
    agitation_des_engrais: yup
    .string()
    .required('obligatoire de cocher un choix'),
    nombre_et_volume_des_citernes: yup
    .string()
    .required('obligatoire de cocher un choix'),
    pompe_de_reprise: yup
    .string()
    .required('obligatoire de cocher un choix'),
    demarrage_pompe_de_reprise: yup
    .string()
    .required('obligatoire de cocher un choix'),
    pompe_de_remplissage: yup
    .string()
    .required('obligatoire de cocher un choix'),
    demarrage_pompe_de_remplissage: yup
    .string()
    .required('obligatoire de cocher un choix'),
    
});

const initialValues = {
    filtration: '',
    commande_des_vannes: '',
    fertigation: '',
    agitation_des_engrais: '',
    pompe_de_reprise: '',
    demarrage_pompe_de_reprise: '',
    pompe_de_remplissage: '',
    demarrage_pompe_de_remplissage: '',
    nombre_et_volume_des_citernes: '',
    Observation: ''
};



export default function ForthStep() {

    const {setStep,setUserData,userData} = useContext(multiStepContext)

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                setUserData({...userData,values});
                setStep(5);
            }}
    >
      {formik => (
          <Form>
            <Box className="stepContent">
                <header>Filtration :</header>          
                        <FormControl component="fieldset">
                            <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt:1}}>
                                <RadioGroup row aria-label="filtration" name="filtration" value={formik.filtration} onChange={formik.handleChange}>
                                    <FormControlLabel value="automatique" control={<Radio />} label="Automatique" />
                                    <FormControlLabel value="manuelle" control={<Radio />} label="Manuelle" />
                                    <FormControlLabel value="a_disques" control={<Radio />} label="A disques" />
                                    <FormControlLabel value="a_tamis" control={<Radio />} label="A tamis" />
                                    <FormControlLabel value="a_sable" control={<Radio />} label="A sable" />
                                    <FormControlLabel value="existante" control={<Radio />} label="Existante" />
                                </RadioGroup>
                            </Box>
                            {formik.touched.filtration && Boolean(formik.errors.filtration) ? (
                                <FormHelperText error={Boolean(formik.errors.filtration)}>{formik.errors.filtration}</FormHelperText>
                                ) : null}
                        </FormControl>
                <header>Commande des vannes :</header>           
                    <FormControl component="fieldset">
                        <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                            <RadioGroup row aria-label="commande_des_vannes" name="commande_des_vannes" value={formik.commande_des_vannes} onChange={formik.handleChange} >
                                <FormControlLabel value="manuelle" control={<Radio />} label="Manuelle" />
                                <FormControlLabel value="hydraulique" control={<Radio />} label="Hydraulique" />
                                <FormControlLabel value="electrique" control={<Radio />} label="Électrique" />
                                <FormControlLabel value="existante" control={<Radio />} label="Existante" />
                            </RadioGroup>
                        </Box>
                            {formik.touched.commande_des_vannes && Boolean(formik.errors.commande_des_vannes) ? (
                                <FormHelperText error={Boolean(formik.errors.commande_des_vannes)}>{formik.errors.commande_des_vannes}</FormHelperText>
                                ) : null}
                    </FormControl>
                    <header>Fertigation :</header>           
                    <FormControl component="fieldset">
                        <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                            <RadioGroup row aria-label="fertigation" name="fertigation" value={formik.fertigation} onChange={formik.handleChange} >
                                    <FormControlLabel value="Injecteur_venturi" control={<Radio />} label="Injecteur venturi" />
                                    <FormControlLabel value="Kit_manuel" control={<Radio />} label="Manuelle" />
                                    <FormControlLabel value="a_disques" control={<Radio />} label="Kit manuel" />
                                    <FormControlLabel value="Kit_semi_automatique" control={<Radio />} label="Kit semi-automatique" />
                                    <FormControlLabel value="Machine_de_fertigation" control={<Radio />} label="Machine de fertigation" />
                                    <FormControlLabel value="Existant" control={<Radio />} label="Existant" />
                            </RadioGroup>
                        </Box>
                            {formik.touched.fertigation && Boolean(formik.errors.fertigation) ? (
                                <FormHelperText error={Boolean(formik.errors.fertigation)}>{formik.errors.fertigation}</FormHelperText>
                                ) : null}
                    </FormControl>
                    <header>Nombre et volume des citernes :</header>           
                    <FormControl component="fieldset">
                        <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                            <RadioGroup row aria-label="nombre_et_volume_des_citernes" name="nombre_et_volume_des_citernes" value={formik.nombre_et_volume_des_citernes} onChange={formik.handleChange} >
                                <FormControlLabel value="4600" control={<Radio />} label="4600" />
                                <FormControlLabel value="2000" control={<Radio />} label="2000" />
                                <FormControlLabel value="1000" control={<Radio />} label="1000" />
                                <FormControlLabel value="500" control={<Radio />} label="500" />
                                <FormControlLabel value="bac_de_melange" control={<Radio />} label="bac_de_melange" />
                                <FormControlLabel value="autres" control={<Radio />} label="Autres" />
                            </RadioGroup>
                        </Box>
                            {formik.touched.nombre_et_volume_des_citernes && Boolean(formik.errors.nombre_et_volume_des_citernes) ? (
                                <FormHelperText error={Boolean(formik.errors.nombre_et_volume_des_citernes)}>{formik.errors.nombre_et_volume_des_citernes}</FormHelperText>
                                ) : null}
                    </FormControl>
                    <header>Agitation des engrais :</header>           
                    <FormControl component="fieldset">
                        <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                            <RadioGroup row aria-label="agitation_des_engrais" name="agitation_des_engrais" value={formik.agitation_des_engrais} onChange={formik.handleChange} >
                                <FormControlLabel value="1.5" control={<Radio />} label="1.5 CV" />
                                <FormControlLabel value="2" control={<Radio />} label="2 CV" />
                                <FormControlLabel value="3" control={<Radio />} label="3 CV" />
                                <FormControlLabel value="4" control={<Radio />} label="4 CV" />
                            </RadioGroup>
                        </Box>
                            {formik.touched.agitation_des_engrais && Boolean(formik.errors.agitation_des_engrais) ? (
                                <FormHelperText error={Boolean(formik.errors.agitation_des_engrais)}>{formik.errors.agitation_des_engrais}</FormHelperText>
                                ) : null}
                    </FormControl>
                    <header>Pompe de reprise :</header>          
                    <FormControl component="fieldset">
                            <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                                <RadioGroup row aria-label="pompe_de_reprise" name="pompe_de_reprise" value={formik.pompe_de_reprise} onChange={formik.handleChange} >
                                        <FormControlLabel value="electropompe" control={<Radio />} label="Électropompe" />
                                        <FormControlLabel value="pompe_axe_horizontal" control={<Radio />} label="Pompe axe horizontal" />
                                        <FormControlLabel value="monobloc" control={<Radio />} label="Monobloc" />
                                        <FormControlLabel value="accouplement" control={<Radio />} label="Accouplement" />
                                        <FormControlLabel value="2900_tr/min" control={<Radio />} label="2900 tr/min" />
                                        <FormControlLabel value="1500_tr/min" control={<Radio />} label="1500 tr/min" />
                                        <FormControlLabel value="Existant" control={<Radio />} label="Existant" />
                                </RadioGroup>
                            </Box>
                                {formik.touched.pompe_de_reprise && Boolean(formik.errors.pompe_de_reprise) ? (
                                <FormHelperText error={Boolean(formik.errors.pompe_de_reprise)}>{formik.errors.pompe_de_reprise}</FormHelperText>
                                ) : null}
                    </FormControl>
                    <Box sx={{ ml: 3 , mt: 1}}>  
                        <Typography>Démarrage :</Typography>
                        <FormControl component="fieldset">
                            <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                                <RadioGroup row aria-label="demarrage_pompe_de_reprise" name="demarrage_pompe_de_reprise" value={formik.demarrage_pompe_de_reprise} onChange={formik.handleChange} >
                                    <FormControlLabel value="etoile_triangle" control={<Radio />} label="Etoile triangle" />
                                    <FormControlLabel value="electronique_progressif" control={<Radio />} label="Électronique progressif" />
                                    <FormControlLabel value="Variateur_de_vitesse" control={<Radio />} label="Variateur de vitesse" />
                                </RadioGroup>
                            </Box>
                                {formik.touched.demarrage_pompe_de_reprise && Boolean(formik.errors.demarrage_pompe_de_reprise) ? (
                                <FormHelperText error={Boolean(formik.errors.demarrage_pompe_de_reprise)}>{formik.errors.demarrage_pompe_de_reprise}</FormHelperText>
                                ) : null}
                        </FormControl>
                    </Box>
                 <Box sx={{ ml: 3 , mt: 1}}>   
                    <header>Pompe de remplissage :</header>          
                    <FormControl component="fieldset">
                        <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                            <RadioGroup row aria-label="pompe_de_remplissage" name="pompe_de_remplissage" value={formik.pompe_de_remplissage} onChange={formik.handleChange} >
                                    <FormControlLabel value="pompe_immergée" control={<Radio />} label="Pompe immergée" />
                                    <FormControlLabel value="pompe_axe_vertical" control={<Radio />} label="Pompe axe vertical" />
                            </RadioGroup>
                        </Box>
                            {formik.touched.pompe_de_remplissage && Boolean(formik.errors.pompe_de_remplissage) ? (
                                <FormHelperText error={Boolean(formik.errors.pompe_de_remplissage)}>{formik.errors.pompe_de_remplissage}</FormHelperText>
                                ) : null}
                    </FormControl>
                 </Box>
                 <Box sx={{ ml: 3 , mt: 1}}>  
                    <Typography >Démarrage :</Typography>
                    <FormControl component="fieldset">
                        <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                            <RadioGroup row aria-label="demarrage_pompe_de_remplissage" name="demarrage_pompe_de_remplissage" value={formik.demarrage_pompe_de_remplissage} onChange={formik.handleChange}>
                                <FormControlLabel value="etoile_triangle" control={<Radio />} label="Etoile triangle" />
                                <FormControlLabel value="electronique_progressif" control={<Radio />} label="Électronique progressif" />
                                <FormControlLabel value="variateur_de_vitesse" control={<Radio />} label="Variateur de vitesse" />
                                <FormControlLabel value="existant" control={<Radio />} label="Existant" />
                            </RadioGroup>
                        </Box>
                        {formik.touched.demarrage_pompe_de_remplissage && Boolean(formik.errors.demarrage_pompe_de_remplissage) ? (
                        <FormHelperText error={Boolean(formik.errors.demarrage_pompe_de_remplissage)}>{formik.errors.demarrage_pompe_de_remplissage}</FormHelperText>
                        ) : null}
                    </FormControl>
                 </Box>
                 <Box mt={1}>
                    <header>Observation</header>
                    <TextField label="Observation" name='Observation' value={formik.Observation} onChange={formik.handleChange} variant="outlined" fullWidth multiline minRows={4} margin ="normal"/>
                 </Box>      
                 <Box className='button_container'>
                    <Button variant="contained" type="button" onClick={()=> {setStep(3)}}>Back</Button>
                    <Button variant="contained" type="submit" color="primary">Next</Button>
                 </Box>

            </Box>
          </Form>
       )}
</Formik>
   
    );
}