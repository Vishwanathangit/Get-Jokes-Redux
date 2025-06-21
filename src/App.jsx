import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchjokes, fetchCategories } from './Jokeslice'
import React from 'react'
function App() {
  const [category, setcategory] = useState('')
  const [error, setError] = useState('')
  const [showCategories, setShowCategories] = useState(false)
  
  const { joke, loading, categories, categoriesLoading } = useSelector(function(state){
     return state.joke
  })

  const dispatch = useDispatch()

  function handleChangecategory(e) {
    setcategory(e.target.value)
    if (error) {
      setError('')
      setShowCategories(false)
    }
  }

  async function handlefetch(){
    if (!category.trim()) {
      setError('Please enter a category! 🤔')
      setShowCategories(false)
      return
    }
    
    // If categories are not loaded, fetch them first for validation
    let categoriesToCheck = categories
    if (!categories.length) {
      const result = await dispatch(fetchCategories())
      categoriesToCheck = result.payload || []
    }
    
    if (!categoriesToCheck.includes(category.toLowerCase().trim())) {
      setError(`Invalid category! 😅`)
      setShowCategories(true)
      return
    }
    
    setError('')
    setShowCategories(false)
    dispatch(fetchjokes(category.toLowerCase().trim()))
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handlefetch()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
            🎭 Chuck Norris Jokes 🎭
          </h1>
          <p className="text-gray-300 text-lg">
            Get hilarious jokes by category! 😂
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Input Section */}
          <div className="mb-6">
            <div className="relative">
              <input 
                onChange={handleChangecategory}
                onKeyPress={handleKeyPress}
                type="text" 
                placeholder="Enter category (e.g., 'animal', 'dev', 'sport')" 
                className="w-full px-6 py-4 rounded-2xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:bg-white/30 transition-all duration-300 text-lg backdrop-blur-sm"
                disabled={loading}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">
                🔍
              </div>
            </div>
          </div>

          {/* Button */}
          <button 
            onClick={handlefetch}
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg text-lg mb-6 cursor-pointer"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Loading Joke... 🎪
              </div>
            ) : (
              <>Get Random Joke 🎯</>
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-200 backdrop-blur-sm">
              <div className="flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                <div>
                  <p className="font-semibold">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Joke Display */}
          <div className="bg-white/10 rounded-2xl p-6 min-h-[120px] flex items-center justify-center border border-white/20 backdrop-blur-sm">
            {loading ? (
              <div className="text-center">
                <div className="animate-bounce text-4xl mb-2">🤹</div>
                <p className="text-gray-300">Fetching an awesome joke...</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-3xl mb-4">💬</div>
                <p className="text-white text-lg leading-relaxed font-medium">
                  {joke}
                </p>
              </div>
            )}
          </div>

          {/* Available Categories - Only show when there's an error */}
          {showCategories && categories.length > 0 && (
            <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <span className="text-xl mr-2">📚</span>
                Available Categories:
              </h3>
              {categoriesLoading ? (
                <div className="flex items-center justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  <span className="text-gray-300">Loading categories...</span>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span 
                      key={cat}
                      onClick={() => {
                        setcategory(cat)
                        setError('')
                        setShowCategories(false)
                      }}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full cursor-pointer hover:bg-white/30 transition-colors duration-200"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Powered by Chuck Norris API 🥋 | Made with ❤️ and React
          </p>
        </div>
      </div>
    </div>
  )
}

export default App