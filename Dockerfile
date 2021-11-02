FROM node:14            
WORKDIR /app            
COPY package.json /app 
ARG NODE_ENV
RUN if [ "$Node_ENV" = "development" ]; \
		then npm install; \
		else npm install --only=production; \
		fi                  
COPY . .      
ENV PORT=4000         
EXPOSE $PORT		   
CMD ["npm","start"] 