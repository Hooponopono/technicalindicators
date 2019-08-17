
docker run -it \
-v $(pwd)/src:/src/src \
-v $(pwd)/test:/src/test \
-v $(pwd)/dist:/src/dist \
-v $(pwd)/lib:/src/lib \
-v $(pwd)/declarations:/src/declarations \
Hooponopono/technicalindicators \
npm -- run build-lib