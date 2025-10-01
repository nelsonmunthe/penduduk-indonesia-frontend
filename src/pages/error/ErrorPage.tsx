import { useNavigate } from 'react-router-dom';
import CustomButton from '../../component/CustomButton';
import { CHECK_ICON } from '../../themes/icons';

const ErrorPage = () => {
    const navigate = useNavigate();

    const onHandleBackHome = ():void => {
      navigate("/")
    }

    return(
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base sm:text-4xl font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-4xl tracking-tight text-balance text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CustomButton 
              text="Go back home"
              onClick={onHandleBackHome}
              Icon={CHECK_ICON}
              type={undefined}
            />
          </div>
        </div>
      </main>
    )
}

export default ErrorPage