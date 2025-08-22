import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import Spinner from "./components/Spinner/Spinner"
import Alert from "./components/Alert/Alert"
import useWeather from "./hooks/useWeather"

function App() {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading &&
          <Spinner />
        }
        {hasWeatherData &&
          <WeatherDetail
            weather={weather}
          />
        }
        {notFound &&
          <Alert>
            Ciudad No Encontrada
          </Alert>
        }
      </div>
    </>
  )
}

export default App
