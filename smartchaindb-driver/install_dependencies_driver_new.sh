# run chmod +x install_dependencies_driver_new.sh
# then run  ./install_dependencies_driver_new.sh

sudo apt update
sudo apt install -y zip
sudo apt install -y unzip

#Install JAVA 8
sudo apt install openjdk-8-jdk

sudo update-alternatives --config java 
#chose java-8

export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/bin/java 

wget https://services.gradle.org/distributions/gradle-3.0-bin.zip -P /tmp
sudo unzip -d /opt/gradle /tmp/gradle-*.zip
ls /opt/gradle/gradle-3.0
sudo touch /etc/profile.d/gradle.sh


echo "export GRADLE_HOME=/opt/gradle/gradle-3.0" > /etc/profile.d/gradle.sh
echo "export PATH=${GRADLE_HOME}/bin:${PATH}" >> /etc/profile.d/gradle.sh


sudo chmod +x /etc/profile.d/gradle.sh
sudo source /etc/profile.d/gradle.sh

export GRADLE_HOME=/opt/gradle/gradle-3.0
export PATH=${GRADLE_HOME}/bin:${PATH}
gradle -v
gradle build


gradle run >  "../$(hostname).log"
