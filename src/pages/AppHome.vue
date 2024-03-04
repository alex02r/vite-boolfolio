<script>
export default {
    name: 'AppHome'
}
</script>
<template lang="">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="jumbo">
                    <img src="https://blush.design/api/download?shareUri=rjIG9_xwA&w=800&h=800&fm=png" alt="scatola">
                    <h2>Benvenuto nel mio Portfolio di Progetti Web</h2>
                    <p>Ciao! questo è il mio portfolio personale. Qui, puoi esplorare una varietà di progetti su cui ho lavorato. Ogni progetto rappresenta un pezzo della mia esperienza nello sviluppo web, mostrando le diverse competenze che ho acquisito e perfezionato nel tempo.</p>
                </div>
                <div class="row my-5">
                    <div class="col-7">
                        <h2>I Miei Progetti</h2>
                        <p>
                            Ogni progetto ha una serie di dettagli associati per darti un’idea del mio processo di sviluppo e delle tecnologie che ho utilizzato. Per ogni progetto, troverai: 
                            <ul>
                                <li><strong>Nome:</strong>  Il titolo del progetto.</li>
                                <li><strong>Descrizione:</strong> Una breve panoramica del progetto, compresi gli obiettivi e i risultati.</li>
                                <li><strong>Tipo:</strong> Il tipo di progetto (ad esempio, sito web, applicazione web, ecc.).</li>
                                <li><strong>Tecnologie usate:</strong>  Un elenco delle tecnologie e degli strumenti che ho utilizzato per realizzare il progetto.</li>
                                <li><strong>Data di Creazione:</strong> La data in cui ho iniziato a lavorare sul progetto.</li>
                                <li><strong>Data di Termine:</strong> La data in cui ho completato il progetto.</li>
                            </ul>
                            Per esplorare i progetti basta cliccare "progetti" nell'header della pagina
                        </p>
                    </div>
                    <div class="col-5">
                        <img src="https://blush.design/api/download?shareUri=6CuI2zinb&w=800&h=800&fm=png" alt="web">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/generals.scss';
    .jumbo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 300px;
        }
    }
</style>