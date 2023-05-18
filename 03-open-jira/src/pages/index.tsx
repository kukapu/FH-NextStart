import { Layout } from "@/components/layout";
import { EntryList, NewEntry } from "@/components/ui";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

export default function Home() {
  return (
    
    <Layout title="Home - OpenJira">
      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              <NewEntry />
              <EntryList status='pending' />
              
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Finalizadas" />
            <EntryList status="finished" />
          </Card>
        </Grid>

      </Grid>
    </Layout>
   
  )
}
