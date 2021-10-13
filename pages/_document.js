import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <title>Admin Dashboard </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                    <meta content="Admin template that can be used to build dashboards for CRM, CMS, etc." name="description" />
                    <meta content="Potenz Global Solutions" name="author" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <link rel="shortcut icon" href="assets/img/favicon.ico" />

                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />

                    <link rel="stylesheet" type="text/css" href="assets/css/vendors.css" />

                    <link href="assets/css/style.css" rel="stylesheet" type="text/css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="assets/js/vendors.js"></script>
                    <script src="assets/js/app.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument