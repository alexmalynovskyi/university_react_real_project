import { Grid } from "@material-ui/core";

export default function GridItem({ xs = 3, className, children, ...props }) {

  return <Grid item xs={xs} className={className} {...props}>
    {children}
  </Grid>
}