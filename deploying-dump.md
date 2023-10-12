.
added 102 packages, and audited 113 packages in 2s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[2023-10-09 10:54:34]  INFO the build results of the "bookshop-srv" module will be packaged and saved in the "gen/.bookshop_mta_build_tmp/bookshop-srv" folder
[2023-10-09 10:54:34]  INFO finished building the "bookshop-srv" module
[2023-10-09 10:54:34]  INFO building the "bookshop-db-deployer" module...
[2023-10-09 10:54:34]  INFO executing the "npm install --production" command...
npm WARN config production Use `--omit=dev` instead.
...
added 31 packages, and audited 32 packages in 3s

found 0 vulnerabilities
[2023-10-09 10:54:38]  INFO the build results of the "bookshop-db-deployer" module will be packaged and saved in the "gen/.bookshop_mta_build_tmp/bookshop-db-deployer" folder
[2023-10-09 10:54:43]  INFO finished building the "bookshop-db-deployer" module
[2023-10-09 10:54:43]  INFO building the "bookshop" module...
[2023-10-09 10:54:43]  INFO executing the "npm install --production" command...
npm WARN config production Use `--omit=dev` instead.
.......npm WARN deprecated scmp@1.0.0: scmp v2 uses improved core crypto comparison since Node v6.6.0

added 230 packages, and audited 231 packages in 8s

11 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
[2023-10-09 10:54:51]  INFO the build results of the "bookshop" module will be packaged and saved in the "gen/.bookshop_mta_build_tmp/bookshop" folder
[2023-10-09 10:54:52]  INFO finished building the "bookshop" module
[2023-10-09 10:54:52]  INFO running the "after-all" build...
[2023-10-09 10:54:52]  INFO generating the metadata...
[2023-10-09 10:54:52]  INFO generating the "/Users/nigeljames/Code/Cap/cloud-cap-samples/bookshop/gen/.bookshop_mta_build_tmp/META-INF/mtad.yaml" file...
[2023-10-09 10:54:52]  INFO generating the MTA archive...
[2023-10-09 10:54:54]  INFO the MTA archive generated at: gen/mta.tar
[2023-10-09 10:54:54]  INFO cleaning temporary files...

nigeljames@middle-earth in cloud-cap-samples/bookshop on 🌱 main [!?] is 📦 v1.0.0 took 24s 
✦ at 10:54:54 ➜ cf deploy gen/mta.tar
Deploying multi-target app archive gen/mta.tar in org 5d497883trial / space dev as sap.sdn@squarecloud.com.au...

Uploading 1 files...
  /Users/nigeljames/Code/Cap/cloud-cap-samples/bookshop/gen/mta.tar
Error occurred: Post "https://deploy-service.cf.us10-001.hana.ondemand.com/api/v1/spaces/0545480c-cd59-41cb-83ba-3cd20225687c/files": retry is needed. Retrying after: 3s.
^C

nigeljames@middle-earth in cloud-cap-samples/bookshop on 🌱 main [!?] is 📦 v1.0.0 took 1m46s 
✦ at 10:57:54 ✖ cf deploy gen/mta.tar
Deploying multi-target app archive gen/mta.tar in org 5d497883trial / space dev as sap.sdn@squarecloud.com.au...

Uploading 1 files...
  /Users/nigeljames/Code/Cap/cloud-cap-samples/bookshop/gen/mta.tar
Error occurred: Post "https://deploy-service.cf.us10-001.hana.ondemand.com/api/v1/spaces/0545480c-cd59-41cb-83ba-3cd20225687c/files": retry is needed. Retrying after: 3s.
^C

nigeljames@middle-earth in cloud-cap-samples/bookshop on 🌱 main [!?] is 📦 v1.0.0 took 2m37s 
✦ at 11:00:34 ✖ cf deploy gen/mta.tar
Deploying multi-target app archive gen/mta.tar in org 5d497883trial / space dev as sap.sdn@squarecloud.com.au...

Uploading 1 files...
  /Users/nigeljames/Code/Cap/cloud-cap-samples/bookshop/gen/mta.tar
OK
Operation ID: 4041c32e-6637-11ee-8946-eeee0a99e205
Deploying in org "5d497883trial" and space "dev"
Detected MTA schema version: "3"
No deployed MTA detected - this is initial deployment of MTA with ID "capire.bookshop"
Detected new MTA version: "1.0.0"
Processing service "bookshop-db"...
Creating service "bookshop-db" from MTA resource "bookshop-db"...
Processing service "bookshop-auth"...
Setting service "bookshop-auth" parameters from "xs-security.json"
Creating service "bookshop-auth" from MTA resource "bookshop-auth"...
Error monitoring creation or update of services: Error creating service "bookshop-db" from offering "hana" and plan "hdi-shared": Service broker error: Service broker hana-broker failed with: Can not create service instance 'bookshop-db': There is no database available. Ensure that you have a database available in space 'dev' within organization '5d497883trial'. 
Proceeding with automatic retry... (3 of 3 attempts left)
Creating service "bookshop-db" from MTA resource "bookshop-db"...
1 of 1 done
Error monitoring creation or update of services: Error creating service "bookshop-db" from offering "hana" and plan "hdi-shared": Service broker error: Service broker hana-broker failed with: Can not create service instance 'bookshop-db': There is no database available. Ensure that you have a database available in space 'dev' within organization '5d497883trial'. 
Proceeding with automatic retry... (2 of 3 attempts left)
Creating service "bookshop-db" from MTA resource "bookshop-db"...
Error monitoring creation or update of services: Error creating service "bookshop-db" from offering "hana" and plan "hdi-shared": Service broker error: Service broker hana-broker failed with: Can not create service instance 'bookshop-db': There is no database available. Ensure that you have a database available in space 'dev' within organization '5d497883trial'. 
Proceeding with automatic retry... (1 of 3 attempts left)
Creating service "bookshop-db" from MTA resource "bookshop-db"...
Error monitoring creation or update of services: Error creating service "bookshop-db" from offering "hana" and plan "hdi-shared": Service broker error: Service broker hana-broker failed with: Can not create service instance 'bookshop-db': There is no database available. Ensure that you have a database available in space 'dev' within organization '5d497883trial'. 
Process failed.
Use "cf deploy -i 4041c32e-6637-11ee-8946-eeee0a99e205 -a abort" to abort the process.
Use "cf deploy -i 4041c32e-6637-11ee-8946-eeee0a99e205 -a retry" to retry the process.
Use "cf dmol -i 4041c32e-6637-11ee-8946-eeee0a99e205" to download the logs of the process.



