guard 'livereload' do
  watch(%r{app/.*/[^.][^/]+\.(erb|haml|slim)})
  watch(%r{app/helpers/.*/[^.][^/]+\.rb})
  watch(%r{public/(.*/[^.][^/]+\.(css|js|html))}) {|m| m[1] }
  watch(%r{app/assets/(.*/[^.][^/]+\.css)(\.s[ac]ss)?}) { |m| "/assets/#{m[1]}" }
  watch(%r{app/assets/(.*/[^.][^/]+\.jsx?)(\.coffee)?}) { |m| "/assets/#{m[1]}" }
  watch(%r{config/locales/[^.].+\.yml})
end
