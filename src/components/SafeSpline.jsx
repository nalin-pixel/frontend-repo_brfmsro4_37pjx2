import React, { Suspense } from 'react'

// Lazy load Spline so if it fails, rest of the app still renders
const Spline = React.lazy(() => import('@splinetool/react-spline'))

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Spline failed to load:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null
    }
    return this.props.children
  }
}

const SafeSpline = ({ scene, className, style, fallback = null }) => {
  const Fallback = fallback || (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
  )
  return (
    <ErrorBoundary fallback={Fallback}>
      <Suspense fallback={Fallback}>
        <Spline scene={scene} style={style} className={className} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default SafeSpline
