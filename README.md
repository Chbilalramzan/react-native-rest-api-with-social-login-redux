<!-- Here is the simpler patch that works for variants on RN 0.72,for vector icons. You have to replace these lines in /node_modules/react-native-vector-icons/fonts.gradle

afterEvaluate {

 android.applicationVariants.all { def variant ->
     def targetName = variant.name.capitalize()
    def lintVitalAnalyzeTask = tasks.findByName("lintVitalAnalyze${targetName}")
    if (lintVitalAnalyzeTask) {
        lintVitalAnalyzeTask.dependsOn(fontCopyTask)
    }
     def generateAssetsTask = tasks.findByName("generate${targetName}Assets")
     generateAssetsTask.dependsOn(fontCopyTask)
 }
then patch the package. npx patch-package react-native-vector-icons -->
