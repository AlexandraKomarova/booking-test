import styles from '../styles/PickUpATask.module.css'
import { motion } from 'framer-motion'
import { circleVariants, titleVariants, taskTitleVariants, photoVariants, dueVariants } from '../animations/bookingAnimations.js'

const PickUpATask = () => {
  return (
    <motion.div className={styles.container} 
      initial="hidden"
      animate="visible">
      <motion.div className={styles.circle} variants={circleVariants}></motion.div>
      <motion.div className={styles.title} variants={titleVariants}>
        pick up a task
      </motion.div>
      <div className={styles.task1}>
        <motion.div className={styles.taskTitle} variants={taskTitleVariants}>
          help Kate design a portfolio website
        </motion.div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo1} variants={photoVariants}></motion.div>
          <motion.div className={styles.due} variants={dueVariants}>
            <span className={styles.dueWord}>due: </span><span className={styles.dueDate}>7/1</span>
          </motion.div>
        </div>
      </div>
      <div className={styles.task2}>
        <motion.div className={styles.taskTitle} variants={taskTitleVariants}>
          help us build a sauna
        </motion.div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo2} variants={photoVariants}></motion.div>
          <motion.div className={styles.due} variants={dueVariants}>
            <span className={styles.dueWord}>due: </span><span className={styles.dueDate}>8/31</span>
          </motion.div>
        </div>
      </div>
      <div className={styles.task3}>
        <motion.div className={styles.taskTitle} variants={taskTitleVariants}>
          help us plant strawberries
        </motion.div>
        <div className={styles.photoAndDueWrapper}>
          <motion.div className={styles.photo3} variants={photoVariants}></motion.div>
          <motion.div className={styles.due} variants={dueVariants}><span className={styles.dueWord}>due: </span><span className={styles.dueDate}>4/15</span></motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default PickUpATask