mkdir yf-proxy && cd yf-proxy
npm init -y
npm install express node-fetch cors
json{
  "type": "module"
}
const YF_PROXY  = "http://localhost:3001/api/chart/";
const YF_QUOTE  = "http://localhost:3001/api/quote?symbols=";
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000"
}));
const PORT = process.env.PORT || 3001;